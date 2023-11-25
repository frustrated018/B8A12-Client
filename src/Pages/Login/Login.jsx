import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAuth from "../../Hooks/useAuth";
import useToastify from "../../Hooks/useToastify";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
      "Password must contain at least one uppercase letter and one special character"
    )
    .required("Password is required"),
});

const Login = () => {
  const { logIn, googleSignIn } = useAuth();
  const { successToast, errorToast } = useToastify();
  const navigate = useNavigate();

  // Loging user in with email and password
  const handleSubmit = (values) => {
    logIn(values.email, values.password)
      .then((res) => {
        const user = res.user;
        // displaing toast
        successToast(`${user?.displayName}, Welcome Back!`);
        // TODO: Navigating directly to the home page but will update this to specific page next [when using private route]
        navigate("/");
      })
      .catch((err) => {
        errorToast(`${err}`);
      });
  };
  // Logging in with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        successToast(` ${res?.user?.displayName}, Welcome back!`);
        // TODO: Navigating directly to the home page but will update this to specific page next [when using private route]
        navigate("/");
      })
      .catch((err) => {
        errorToast(`${err}`);
      });
  };

  return (
    <>
      <div
        className="min-w-screen min-h-screen bg-base-100 flex items-center justify-center px-5 py-5"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/blue-and-black-abstract-painting-Hlkuojv_P6I)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
              {/* Form */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  {/* Email Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary"
                    >
                      Email
                    </label>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      className="mt-1 p-2 w-full rounded-md"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-primary"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="mt-1 p-2 w-full rounded-md"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md w-full text-lg font-semibold"
                  >
                    Login
                  </button>
                  <div className="divider">OR</div>
                </Form>
              </Formik>
              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md w-full text-lg font-semibold"
              >
                <div className="flex items-center justify-center">
                  <FcGoogle size={25}></FcGoogle>
                  <span className="ml-4">Log in with Google</span>
                </div>
              </button>

              {/* Redirecting */}
              <p className="text-right text-base text-neutral mt-3">
                Don&apos;t have an Account? {"  "}
                <a className="hover:underline hover:text-accent" href="/signup">
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
