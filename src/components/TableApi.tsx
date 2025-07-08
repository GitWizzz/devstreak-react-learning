import { useState } from "react";

const TableApi = () => {
  const [data, setdata] = useState([]);
  const [Loading, setLoading] = useState(true);

  setTimeout(() => {
    const getResponse = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      const data = await response.json();
      setdata(data);
      setLoading(false);
    };
    getResponse();
  }, 2000);
  return (
    <div className="flex justify-center m-5">
      {Loading ? (
        <p>Loading....</p>
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
            {data.slice(0, 5).map((user: any) => (
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
