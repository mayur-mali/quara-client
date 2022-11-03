import React from "react";
import Navbar from "./Navbar";
import PostQuestion from "./PostQuestion";

export default function Home() {
  return (
    <div className="relative h-auto">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl flex gap-x-4 w-full mx-auto">
          <div className="flex-1 bg-red-100 ">channel</div>
          <div className="w-full max-w-xl ">
            <PostQuestion />
          </div>
          <div className="flex-1  bg-red-100 "></div>
        </div>
      </main>
    </div>
  );
}
