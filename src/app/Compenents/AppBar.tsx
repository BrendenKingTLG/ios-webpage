import React from "react";
import {
  IoCall,
  IoChatbubble,
  IoVideocamSharp,
  IoCompass,
} from "react-icons/io5";

export default function AppBar() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row bottom-0 absolute justify-center items-center gap-8 pt-3 px-5 pb-2 mb-3 bg-slate-500 rounded-3xl">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center h-14 w-14 bg-icon-green rounded-md">
            <IoCall size={50} fill="white" />
          </div>
          <p className="text-sm"></p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center h-14 w-14 bg-icon-green rounded-md">
            <IoChatbubble size={50} fill="white" />
          </div>
          <p className="text-sm"></p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center h-14 w-14 bg-icon-green rounded-md">
            <IoVideocamSharp size={50} fill="white" />
          </div>
          <p className="text-sm"></p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center h-14 w-14 bg-icon-green rounded-md">
            <IoCompass size={50} fill="white" />
          </div>
          <p className="text-sm"></p>
        </div>
      </div>
    </div>
  );
}
