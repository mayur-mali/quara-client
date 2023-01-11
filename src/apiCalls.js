import { axiosInstance } from "./axiosIntence";
import { toast } from "react-toastify";
export const loginCall = async (userCredianitials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axiosInstance.post("auth/login", userCredianitials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    toast.success("Logged In!");
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });

    toast.error(`${error.response.data}`);
  }
};

export const postQuestion = async (content, user, imageurl) => {
  try {
    await axiosInstance.post("post/question", { content, user, imageurl });
    toast.success("Quesion Is Posted !");
  } catch (err) {
    toast.error("somthing error while posting question ");
  }
};

export const postAnswer = async (content, question, user) => {
  try {
    await axiosInstance.post("post/answer", { content, question, user });
    toast.success("Answer Is Posted !");
  } catch (err) {
    toast.error("somthing error while posting answer ");
  }
};

export const postComment = async (content, answer, user) => {
  try {
    await axiosInstance.post("post/comment", { content, answer, user });
    toast.success("Comment Is Posted !");
  } catch (err) {
    toast.error("somthing error while posting comment ");
  }
};

export const userProfile = async (id) => {
  try {
    const res = await axiosInstance.get(`/users/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
