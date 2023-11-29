// useUserRole.js
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userRole, isLoading: userRoleLoading } = useQuery({
    enabled: !loading,
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/checkrole/${user.email}`);
      console.log(res.data);

      const role = res.data?.role || "user"; // Default to "user" if role is not defined

      return role;
    },
  });

  return { userRole, userRoleLoading }; // Return the user role
};

export default useUserRole;
