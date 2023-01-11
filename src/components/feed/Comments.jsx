import React from "react";
import PostUser from "./PostUser";

export default function Comments(props) {
  return (
    <div className="text-black ml-8 px-4 py-2 mt-2 border">
      <PostUser
        username={props.comment.user.username}
        createdAt={props.comment.user.createdAt}
        userid={props.comment.user._id}
      />
      {props.comment.content}
    </div>
  );
}
