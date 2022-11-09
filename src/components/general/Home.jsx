import React from "react";
import Feed from "../feed/Feed";
import Navbar from "./Navbar";
import PostQuestion from "./PostQuestion";

export default function Home() {
  return (
    <div className="relative h-auto">
      <Navbar />
      <main className="pt-20 bg-[#eaeaea] min-h-screen">
        <div className="max-w-7xl flex gap-x-4 w-full mx-auto  py-4">
          <div className="flex-1">channel</div>
          <div className="w-full max-w-xl ">
            {/* <PostQuestion />*/}
            <PostQuestion />
            <Feed />
          </div>
          <div className="flex-1 "></div>
        </div>
      </main>
    </div>
  );
}
