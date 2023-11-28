import { RiVerifiedBadgeFill } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";
const UserProfile = () => {
    const {user} = useAuth();
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <img
          alt="user profile"
          src={user.photoURL}
          className="h-full w-full object-cover"
        />
        <div className="p-8">
          <div className="mx-auto max-w-xl text-left">
            <div>
              <h2 className="text-3xl font-bold">{user.displayName}</h2>
              <h2 className="text-3xl my-5 font-bold">{user.email}</h2>
              <div className="flex items-center bg-green-400 w-[20%] rounded-lg">
                <RiVerifiedBadgeFill size={24}/> 
                <span className="text-2xl my-4">Verified</span>
              </div>
            </div>

            <button className="p-4 bg-primary hover:bg-accent rounded-lg mt-5 text-white text-xl font-bold">Get veified</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
