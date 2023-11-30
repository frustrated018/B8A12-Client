import { RiVerifiedBadgeFill } from "react-icons/ri";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: userInDB } = useQuery({
    queryKey: ["user", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/finduserbyemail/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="flex flex-col items-center p-8">
      <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md">
        <img
          alt="user profile"
          src={userInDB ? userInDB.image : ""}
          className="h-64 w-full object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {userInDB ? userInDB.name : ""}
          </h2>
          <p className="text-gray-600">{userInDB ? userInDB.email : ""}</p>
          <div className="flex items-center mt-4">
            <RiVerifiedBadgeFill size={24} className="text-green-500 mr-2" />
            <span className="text-lg font-semibold text-green-500">
              {userInDB && userInDB.verificationStatus === "verified"
                ? "Verified"
                : "Not Verified"}
            </span>
          </div>
        </div>
      </div>

      <Link to="/dashboard/payment">
        <button
          hidden={userInDB && userInDB.verificationStatus === "verified"}
          className="mt-8 p-4 bg-primary hover:bg-accent rounded-lg text-white text-xl font-bold"
        >
          Get Verified
        </button>
      </Link>
    </div>
  );
};

export default UserProfile;
