import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import useToastify from "../../../Hooks/useToastify";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { successToast } = useToastify();

  // Fetching all users data
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

//   Making user Admin
const handleMakeAdmin = user =>{
    axiosSecure.patch(`/users/makeadmin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}

// TODO: Make the Make user Modarator function

  //   deleting A user from DB
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/delete/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            successToast("User Deleted from Database.");
          }
        });
      }
    });
  };
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
              <th>Make Admin</th>
              <th>Make Modarator</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td className="text-lg font-bold">{user.name}</td>
                <td className="text-lg font-bold">{user.email}</td>
                <td className="text-lg font-bold">{user.role}</td>

                <td>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="bg-secondary p-3 rounded-lg hover:bg-accent"
                  >
                    <GrUserAdmin size={24} />
                  </button>
                </td>
                <td>
                  <button
                    // onClick={() => handleDeleteUser(user)}
                    className="bg-secondary p-3 rounded-lg hover:bg-accent"
                  >
                    <MdAdminPanelSettings size={24} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="bg-secondary p-3 rounded-lg hover:bg-accent"
                  >
                    <FaTrashAlt className="text-red-600" size={24} />
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
