import React from "react";
import { useState } from "react";
import PostAnswer from "./Answer";
export default function SeeMoreBtn(props) {
  const [seeMoreContent, setSeeMoreContent] = useState(false);

  return (
    <>
      {/*seeMoreContent && <PostAnswer answer={props.answers} />*/}
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
    </>
  );
}
