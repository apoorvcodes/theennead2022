import React from "react";
import Image from "next/image";
const Custom404 = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <Image src={require("../public/img/004.jpg")} />
    </div>
  );
};

export default Custom404;
