import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <div
        className="min-w-screen min-h-screen bg-base-100 flex items-center justify-center px-5 py-5"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/blue-and-black-abstract-painting-Hlkuojv_P6I)",
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat"
        }}
      >
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2">
              {/* Image */}
              <img
                src="https://source.unsplash.com/random/500x500/?tech&gadget"
                alt="Random Ryokan Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-4xl text-gray-900">Login!!</h1>
              </div>
              <form>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      {/* input Field */}
                      <input
                        type="email"
                        name="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-secondary"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      {/* Input field */}
                      <input
                        type="password"
                        name="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-secondary"
                        placeholder="************"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-primary hover:bg-accent focus:bg-accent text-white rounded-lg px-3 py-3 font-bold text-[20px]"
                    >
                      Login
                    </button>
                  </div>
                </div>

                <div className="divider">OR</div>

                <button className="block w-full max-w-xs mx-auto bg-primary hover:bg-accent focus:bg-accent text-white rounded-lg px-3 py-3 font-bold text-[20px]">
                  <div className="flex items-center justify-center">
                    <FcGoogle size={25}></FcGoogle>
                    <span className="ml-4">Log in with Google</span>
                  </div>
                </button>
              </form>
              {/* Redirecting */}
              <p className="text-right text-base text-neutral mt-3">
                Don&apos;t have an Account? {"  "}
                <a
                  className="hover:underline hover:text-accent"
                  href="/signup"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
