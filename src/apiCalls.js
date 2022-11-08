import { axiosInstance } from "./axiosIntence";
import { toast } from "react-toastify";
export const loginCall = async (userCredianitials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axiosInstance.post("auth/login", userCredianitials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    toast.success("Logged In!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
    console.log(error.response.data);
    toast.error(`${error.response.data}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export const postQuestion = async (content, user, imageurl) => {
  try {
    await axiosInstance.post("create/question", { content, user, imageurl });
    toast.success("Quesion Is Posted !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (err) {
    toast.error(`${err.message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
