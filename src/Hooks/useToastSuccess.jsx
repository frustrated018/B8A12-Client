import { toast } from "react-toastify";

const useToastSuccess = () => {
  const showToast = (message) => {
    return toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return showToast;
};

export default useToastSuccess;
