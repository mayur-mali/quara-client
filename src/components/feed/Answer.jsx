import React, { useContext } from "react";
import { useState } from "react";
import { postAnswer } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import PostUser from "./PostUser";
export default function Answer(props) {
  const { content, user } = props.ans;

  const handlePostAnswer = () => {
    // postAnswer(answer, props.answer[0].question, user.user._id);
    console.log(props.answer);
  };
  return (
    <div className="bg-gray-100 shadow rounded-md p-4">
      <h2 className="text-lg font-medium capitalize">{content}</h2>
      <PostUser username={user.username} createAt={user.createAt} />
    </div>
  );
}
