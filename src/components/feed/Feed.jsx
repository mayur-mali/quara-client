import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../axiosIntence";
import Post from "./Post";

export default function Feed() {
  const [posts, setPost] = useState([]);

  function toggleSeeMore(state) {}
  useEffect(() => {
    const getAllQuestions = async () => {
      try {
        const res = await axiosInstance.get("post/all");
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllQuestions();
  }, []);

  return (
    <>
      {posts && (
        <div>
          {posts.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      )}
      {posts.length === 0 && <h1>No Post</h1>}
    </>
  );
}
