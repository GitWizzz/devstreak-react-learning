import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

const TableApi = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await new Promise((res) => setTimeout(res, 2000)); // Simulate delay
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        const users = await response.json();
        setData(users);
      } catch (error) {
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center m-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-[50%] border border-gray-300 rounded-lg shadow-md bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">City</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableApi;
