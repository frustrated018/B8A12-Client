import { RiVerifiedBadgeFill } from "react-icons/ri";
import useAuth from "../../../Hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center p-8">
      <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md">
        <img
          alt="user profile"
          src={user.photoURL}
          className="h-64 w-full object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{user.displayName}</h2>
          <p className="text-gray-600">{user.email}</p>
          <div className="flex items-center mt-4">
            <RiVerifiedBadgeFill size={24} className="text-green-500 mr-2" />
            <span className="text-lg font-semibold text-green-500">
              Verified
            </span>
          </div>
        </div>
      </div>

      <button className="mt-8 p-4 bg-primary hover:bg-accent rounded-lg text-white text-xl font-bold">
        Get Verified
      </button>
    </div>
  );
};

export default UserProfile;
