import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { axiosInstance } from "../axiosIntence";
import noprofileimage from "../assets/no-profile.jpg";
import FollowBtn from "../components/feed/FollowBtn";
import { AuthContext } from "../context/AuthContext";
export default function UserProfile() {
  let { id } = useParams();
  const [user, setUser] = useState(null);
  const { user: currentUser } = useContext(AuthContext);
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
  }, [id]);

  return (
    <div className="pt-16 max-w-7xl mx-auto w-full">
      <div className="w-full ">
        <div className="h-48 w-full relative">
          <img
            src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80"
            alt=""
            className="h-full object-cover absolute w-full"
          />
        </div>
        <div className="w-full mt-10 flex md:flex-row flex-col justify-center items-center md:text-left text-center space-x-8 left-20 -bottom-24">
          <img
            alt="no-profile"
            src={noprofileimage}
            className="h-40 w-40 flex-none object-cover ring-offset-2 ring-2 ring-black rounded-full"
          />
          <div className="w-full flex items-center">
            <div className="w-full flex justify-between items-center">
              <div>
                {user && (
                  <div className="space-y-2">
                    <h1 className="text-5xl capitalize font-bold">
                      {user.username}
                    </h1>
                    <p className="text-gray-500 max-w-lg">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequatur, minima!
                    </p>

                    <h3 className="text-lg font-bold capitilize space-x-4">
                      <span>{user.followers.length} Followers </span>
                      <span> {user.followings.length} Followings</span>
                      <span> 0 Post</span>
                    </h3>
                  </div>
                )}
              </div>
              {currentUser.user._id === id ? (
                ""
              ) : (
                <FollowBtn id={id} user={user} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
