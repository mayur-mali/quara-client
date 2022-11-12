import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { userProfile } from "../apiCalls";
import { axiosInstance } from "../axiosIntence";
import noprofileimage from "../assets/no-profile.jpg";
import FollowBtn from "../components/feed/FollowBtn";
export default function UserProfile() {
  const [user, setUser] = useState(null);
  let { id } = useParams();
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
      <div className="w-full bg-blue-100">
        <div className="h-48 w-full relative">
          <img
            src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80"
            alt=""
            className="h-full object-cover absolute w-full"
          />
          <div className="w-full absolute left-20 -bottom-24">
            <img
              alt="no-profile"
              src={noprofileimage}
              className="h-40 w-40 flex-none object-cover ring-offset-2 ring-2 ring-black rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex pl-64 items-center">
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
                  <span> {user.followers.length} Followings</span>
                  <span> 0 Post</span>
                </h3>
              </div>
            )}
          </div>
          <div>
            <FollowBtn />
          </div>
        </div>
      </div>
      <hr className="mt-10" />
    </div>
  );
}
