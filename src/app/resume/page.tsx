import React from "react";
import Resume from "../Compenents/Resume";
import Link from "next/link";
export default function page() {
  return (
    <div className="h-full overflow-auto">
      <Resume />
      <Link
        href={"/"}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-80"
      ></Link>
    </div>
  );
}
