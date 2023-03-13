import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosIntence";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function FollowBtn(props) {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    setIsFollow(props.user?.followers.includes(currentUser.user?._id));
  }, [props.user?.followers, currentUser.user?._id]);

  async function follow() {
    setLoading(true);
    try {
      await axiosInstance.put(`/users/${props.id}/follow`, {
        userId: currentUser.user._id,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
    setIsFollow(!isFollow);
  }

  return (
    <>
      <button
        className="bg-indigo-500 z-20 text-white px-4 py-1 cursor-pointer rounded-md"
        onClick={follow}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          <>{isFollow ? "unfollow" : "follow"}</>
        )}
      </button>
    </>
  );
}
