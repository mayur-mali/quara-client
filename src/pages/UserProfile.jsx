import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { axiosInstance } from "../axiosIntence";
import noprofileimage from "../assets/no-profile.jpg";
import { BiArrowBack } from "react-icons/bi";
import { AuthContext } from "../context/AuthContext";
export default function UserProfile() {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { user: currentUser } = useContext(AuthContext);
  const [isFollow, setIsFollow] = useState(
    user?.followers.includes(currentUser.user?._id)
  );
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axiosInstance.get(`/users/${id}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [id, loading]);

  useEffect(() => {
    setIsFollow(user?.followers.includes(currentUser.user?._id));
  }, [user?.followers, currentUser.user?._id]);

  function follow() {
    setLoading(true);
    try {
      setTimeout(async () => {
        await axiosInstance.put(`/users/${id}/follow`, {
          userId: currentUser.user._id,
        });
        setLoading(false);
      }, 1000);
    } catch (err) {
      setLoading(false);

      console.log(err);
    }
    setIsFollow(!isFollow);
  }

  return (
    <>
      <div className="h-96 w-full relative">
        <img
          src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80"
          alt=""
          className="h-full object-cover absolute w-full"
        />
        <Link to="/">
          <BiArrowBack className="text-black text-2xl top-20 left-36 absolute" />
        </Link>
      </div>

      <div className="max-w-7xl pt-10 mx-auto w-full px-4  space-y-4 flex md:flex-row flex-col justify-center items-start md:text-left text-center ">
        <img
          alt="no-profile"
          src={noprofileimage}
          className="h-40 w-40 mx-auto flex-none object-cover shadow rounded-full"
        />
        <div className="w-full md:ml-8  flex items-center">
          <div className="w-full  flex justify-between items-start">
            {user && (
              <div className="space-y-2 w-full mx-auto">
                <h1 className=" text-2xl text-[#10182F] capitalize font-bold">
                  {user.username}
                </h1>
                <h3 className="text-[#10182F] text-base font-normal ">
                  Making complex clear, advocate of humanity, lifelong learner.
                  Designer @comp and @excomp.
                </h3>

                <h3 className="text-base text-[#545D7A] font-normal capitilize space-x-4">
                  {user.followings.length} Following・
                  {user.followers.length} Followers
                </h3>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          {currentUser.user._id === id ? (
            ""
          ) : (
            <button
              className={
                " z-20 h-10 w-32 text-white font-bold capitalize px-4 py-1  rounded-md " +
                (loading
                  ? " bg-indigo-300"
                  : " bg-gradient-to-r from-[#60E0D3] to-[#67C1F4]")
              }
              onClick={follow}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin font-bold text-xl mx-auto text-white" />
              ) : (
                <>{isFollow ? "unfollow" : "follow"}</>
              )}
            </button>
          )}
        </div>
      </div>
      <hr className="mt-8" />
    </>
  );
}
