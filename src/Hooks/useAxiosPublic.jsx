import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://server-tech-trend.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
