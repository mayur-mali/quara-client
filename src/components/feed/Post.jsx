import React, { useState } from "react";
import { useContext } from "react";
import { postAnswer } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import Answer from "./Answer";
import PostUser from "./PostUser";

import Voting from "./Voting";
export default function Post(props) {
  const { content, imageurl, answer, user, _id } = props.post;
  const [seeMoreContent, setSeeMoreContent] = useState(false);
  const [postAnswerContent, setPostAnswerContent] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const handlePostAnswer = () => {
    postAnswer(postAnswerContent, _id, currentUser.user._id);
    setPostAnswerContent(null);
    window.location.reload();
  };

  return (
    <div className="mt-4  flex rounded-md bg-white shadow-md p-4">
      <Voting />
      <div className="w-full px-2">
        <PostUser username={user.username} createAt={user.createAt} />
        <h1 className="text-2xl mb-4 font-bold">{content}</h1>
        <hr className="mb-4" />
        {imageurl && (
          <img src={imageurl} className="rounded-md" alt={content} />
        )}
        {seeMoreContent && (
          <div className="min-h-auto space-y-4 py-4">
            {answer?.map((ans, i) => (
              <Answer key={i} ans={ans} />
            ))}
            <div className="w-full bg-white h-10 rounded-full border space-x-2 flex justify-between overflow-hidden">
              <input
                type="text"
                name="answer"
                className="focus:outline-none pl-6 flex-1"
                onChange={(e) => setPostAnswerContent(e.target.value)}
              />
              <button
                className="h-full w-28 bg-blue-500 text-white"
                onClick={handlePostAnswer}
              >
                answer
              </button>
            </div>
          </div>
        )}
        <div
          className="bg-gray-100 text-center h-10 rounded-sm"
          onClick={() => setSeeMoreContent(!seeMoreContent)}
        >
          <button className="w-full capitalize flex justify-center items-center  h-full">
            see more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={
                "w-6 h-6 ml-2 transition duration-200 " +
                (seeMoreContent ? " rotate-180" : " rotate-0")
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
