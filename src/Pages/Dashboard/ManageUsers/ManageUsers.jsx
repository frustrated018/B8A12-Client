import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const ManageUsers = () => {
    // Fetching all users data
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <>
      <h1 className="text-4xl font-bold my-5">Total Users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="text-lg font-bold text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      //   onClick={() => handleMakeAdmin(user)}
                      className="bg-primary p-3 rounded-lg hover:bg-accent"
                    >
                      <FaUsers
                        className="text-white"
                        size={24}
                      />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    // onClick={() => handleDeleteUser(user)}
                    className="bg-secondary p-3 rounded-lg hover:bg-accent"
                  >
                    <FaTrashAlt className="text-red-600" size={24}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
