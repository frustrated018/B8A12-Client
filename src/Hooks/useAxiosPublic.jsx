import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://tech-trends-new-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
