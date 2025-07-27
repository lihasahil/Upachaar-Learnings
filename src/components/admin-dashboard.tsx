import { useFetchUsers } from "../hooks/fetch-user";


const AdminDashboard = () => {
  const { data, isLoading, isError, error } = useFetchUsers();

  if (isLoading) return <div className="p-4 text-lg">Loading users...</div>;
  if (isError)
    return <div className="p-4 text-red-600">Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3">Registered At</th>
              </tr>
            </thead>
            <tbody>
              {data?.users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b transition-colors duration-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        user.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-2">{user.address?.city || "N/A"}</td>
                  <td className="px-4 py-2">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 text-right text-sm text-gray-500">
          Total Users: {data?.totalUsers}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
