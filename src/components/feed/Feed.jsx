import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../axiosIntence";
import PostUser from "./PostUser";
import Voting from "./Voting";

export default function Feed() {
  const [posts, setPost] = useState([]);

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
            <div
              key={i}
              className="mt-4  flex rounded-md bg-white shadow-md p-4"
            >
              <Voting />
              <div className="w-full px-2">
                <PostUser />
                <h1 className="text-2xl mb-4 font-bold">{post.content}</h1>
                <hr className="mb-4" />
                {post.imageurl && (
                  <img
                    src={post.imageurl}
                    className="rounded-md"
                    alt={post.content}
                  />
                )}
                <ul>
                  {post.answer.map((ans, i) => (
                    <li key={i}>{ans.content}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
      {posts.length === 0 && <h1>No Post</h1>}
    </>
  );
}
