import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineReddit,
  AiOutlinePhone
} from "react-icons/ai";
import { FiTwitter, FiMail } from "react-icons/fi";
const links = () => {
  return (
    <div className="flex justify-center items-center space-x-6 text-2xl md:text-3xl">
      <AiOutlinePhone color="white" />
      <AiOutlineInstagram color="white" />
      <FiTwitter color="white" />
      <AiOutlineFacebook color="white" />
      <AiOutlineReddit color="white" />
      <FiMail color="white" />
    </div>
  );
};

export default links;
