import React from "react";

export default function FollowBtn(props) {
  return (
    <div>
      <button
        className="bg-indigo-500 text-white px-4 py-1 rounded-md"
        onClick={() => console.log(props.id)}
      >
        Follow
      </button>
    </div>
  );
}
