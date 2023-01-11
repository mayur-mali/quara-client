import React, { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import { postComment } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

import Comments from "./Comments";
import PostUser from "./PostUser";
export default function Answer(props) {
  const { content, user, comment, _id } = props.ans;
  const [toggleComment, setToggleComment] = useState(false);
  const postCommentContent = useRef();
  const { user: currentUser } = useContext(AuthContext);
  const handlePostComment = () => {
    postComment(postCommentContent.current.value, _id, currentUser.user);
    postComment.current.value = "";
    window.location.reload();
  };

  return (
    <div className="bg-gray-50 border rounded-md p-4">
      <PostUser username={user.username} createdAt={user.createdAt} />
      <h2 className="text-md font-medium capitalize mb-2">
        {content} {_id}
      </h2>
      {toggleComment && (
        <div className="">
          {comment?.map((c, i) => (
            <Comments key={i} comment={c} />
          ))}
          <div className="h-10 mt-10 flex w-full">
            <input
              type="text"
              name="comment"
              className="focus:outline-none flex-1 border px-3 py-1"
              required
              placeholder="type comment on answer"
              ref={postCommentContent}
            />
            <button
              className="bg-gray-50 px-3 py-1 flex-none border"
              onClick={handlePostComment}
            >
              add comment
            </button>
          </div>
        </div>
      )}

      <div className="flex space-x-4 mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => setToggleComment(!toggleComment)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
          />
        </svg>
      </div>
    </div>
  );
}
