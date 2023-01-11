import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
export default function PostUser(props) {
  // var localizedFormat = require("dayjs/plugin/localizedFormat");
  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);

  return (
    <div className="mb-3">
      <div className=" flex-none flex justify-between items-center">
        <div>
          <Link to={`/user/${props.userid}`} className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/62.jpg "
              className="rounded-full w-8 h-8"
              alt=""
            />
            <div className="flex flex-col ml-2 items-start w-auto">
              <h2 className="text-lg capitalize font-semibold">
                {props.username}
              </h2>
              <h6 className="text-xs capitalize text-gray-500">
                Posted At : <span>{dayjs(props.createdAt).fromNow()}</span>
              </h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
