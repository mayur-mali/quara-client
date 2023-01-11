import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosIntence";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function FollowBtn(props) {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings?.includes(props?.id)
  );
  async function follow() {
    try {
      await axiosInstance.put(`/users/${props.id}/follow`, {
        userId: currentUser.user._id,
      });
      setFollowed(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function unfollow() {
    try {
      await axiosInstance.put(`/users/${props.id}/unfollow`, {
        userId: currentUser.user._id,
      });
      setFollowed(false);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(followed);
  // const handleClick = async () => {
  //   try {
  //     if (followed) {
  //       await axiosInstance.put(`/users/${props.id}/unfollow`, {
  //         userId: currentUser._id,
  //       });
  //       dispatch({ type: "UNFOLLOW", payload: props.id });
  //     } else {
  //       await axiosInstance.put(`/users/${props.id}/follow`, {
  //         userId: currentUser._id,
  //       });
  //       dispatch({ type: "FOLLOW", payload: props.id });
  //     }
  //     setFollowed(!followed);
  //   } catch (err) {}
  // };
  return (
    <>
      {followed && (
        <button
          className="bg-indigo-500 z-20 text-white px-4 py-1 cursor-pointer rounded-md"
          onClick={follow}
        >
          unfollow
        </button>
      )}
      {!followed && (
        <button
          className="bg-indigo-500 z-20 text-white px-4 py-1 cursor-pointer rounded-md"
          onClick={unfollow}
        >
          follow
        </button>
      )}
    </>
  );
}
