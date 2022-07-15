import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineReddit,
  AiOutlinePhone,
} from "react-icons/ai";
import { FiTwitter, FiMail } from "react-icons/fi";
const links = () => {
  return (
    <div className="flex justify-center items-center space-x-6 text-2xl md:text-3xl">
      <AiOutlinePhone href="" color="white" />
      <AiOutlineInstagram href="https://www.instagram.com/theennead2022/" color="white" />
      <FiTwitter href="https://www.twitter.com/theennead2022/" color="white" />
      <AiOutlineFacebook href="ttps://www.facebook.com/TheEnnead2022-105890242178913/?ref=page_internal" color="white" />
      <AiOutlineReddit href="https://www.reddit.com/r/TheEnneadMUN2022/" color="white" />
      <FiMail href="https://mail.google.com/mail/u/0/?tab=om1#inbox?compose=CllgCKCHTlwbJRdLfwvntwLZcfMvsjwPNJpSlCDMQjgsNSHnMsZktrvbdxcpxTFwqDjbTxWBcCL" color="white" />
    </div>
  );
};

export default links;
