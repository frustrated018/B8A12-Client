import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

// Major ISSUE!!!!!!!
// TODO: There is a problem with the interceptor [Don't know if it's front or backend issue]
// When the common user logs in it logs them out with http://localhost:5000/users/checkadmin/james@nothing.com 403 this error repeatedly
// which makes me think that it is a bakend server issue. But I am not sure

// Issue Fixed !!!

const axiosSecure = axios.create({
  baseURL: "https://tech-trends-new-server.vercel.app",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Adding interceptors to check the vaidation of every secure all to the API's
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      
      return Promise.reject(error);
    }
  );

  // intercepting 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
