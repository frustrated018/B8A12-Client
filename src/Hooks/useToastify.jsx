import { toast } from "react-toastify";

const useToastify = () => {
    const successToast = (message) => {
        return toast.success(
            message ,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      };
    
      const warningToast = (message) => {
        return toast.warn(
         message,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      };
      const infoToast = (message) => {
        return toast.info(
         message,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      };
      const errorToast = (message) => {
        return toast.error(
         message,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      };
    
      return {successToast, warningToast, infoToast, errorToast}
};

export default useToastify;