import { useQuery } from "@tanstack/react-query";

const TanStack = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate 2s delay
      const res = await fetch("https://jsonplaceholder.typicode.com/users/");
      return res.json();
    },
  });

  return (
    <div className="flex justify-center m-5">
      {isLoading ? (
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

export default TanStack;
