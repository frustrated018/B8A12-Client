import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAuth from "../../Hooks/useAuth";
import useToastSuccess from "../../Hooks/useToastSuccess";

const initialValues = {
  name: "",
  email: "",
  password: "",
  photo: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Please enter your full name")
    .required("Your name is required"),
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
  photo: Yup.string()
    .url("Invalid URL format")
    .required("Photo url is required"),
});

const SignUp = () => {
  const { createUser } = useAuth();
  const successToast = useToastSuccess();

  const handleSubmit = (values) => {
    console.log(values);
    createUser(values.email, values.password).then((res) => {
      console.log(res);
    //   const user = res.user
      // TODO: Update user Profile with new name and photo url
      successToast('User created successfully!')
    });
  };

  return (
    <>
      <div
        className="min-w-screen min-h-screen bg-base-100 flex items-center justify-center px-5 py-5"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/a-star-trail-in-the-night-sky-NqJYQ3m_rVA)",
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
                <h1 className="font-bold text-4xl text-gray-900">Sign Up!!</h1>
              </div>
              {/* Form */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary"
                    >
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 w-full rounded-md"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
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
                  {/* Photo Url Field */}
                  <div className="mb-4">
                    <label
                      htmlFor="Photo Url"
                      className="block text-sm font-medium text-primary"
                    >
                      Photo URL
                    </label>
                    <Field
                      type="url"
                      id="photo"
                      name="photo"
                      className="mt-1 p-2 w-full rounded-md"
                    />
                    <ErrorMessage
                      name="photo"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md w-full text-lg font-semibold"
                  >
                    Sign Up
                  </button>
                  <div className="divider">OR</div>
                  {/* Google SignUp Button */}
                  <button className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md w-full text-lg font-semibold">
                    <div className="flex items-center justify-center">
                      <FcGoogle size={25}></FcGoogle>
                      <span className="ml-4">Sign in with Google</span>
                    </div>
                  </button>
                </Form>
              </Formik>

              {/* Redirecting */}
              <p className="text-right text-base text-neutral mt-3">
                Already have an Account? {"  "}
                <a className="hover:underline hover:text-accent" href="/login">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
