import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer pl-4 pr-4  md:p-10 pb-0 bg-black text-base-content md:pl-24 md:pr-24">
      <div>
        <Image
          className="rounded-full"
          width={100}
          height={100}
          src={require("../public/img/logo.png")}
        />
        <p className="text-white text-lg">
          The Ennead
          <br />
          <span className="text-cream">Mun club at Sunbeam</span>
        </p>
      </div>
      <div>
        <span className="footer-title">Links</span>
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/about" className="link link-hover">
          About Us
        </Link>
        <Link href="/committees" className="link link-hover">
          committees
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeiTo3tspIVvluYB8ZFMwFXu8wXOT4ZffJ5f73XVKRSCaZ2Tw/viewform"
          className="link link-hover"
        >
          Register
        </a>
      </div>
      <div>
        <span className="footer-title">Social Media</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/theennead2022/"
          className="link link-hover"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/TheEnnead2022-105890242178913/?ref=page_internal"
          className="link link-hover"
        >
          Facebook
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.reddit.com/r/TheEnneadMUN2022/"
          className="link link-hover"
        >
          Reddit
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/theennead2022/"
          className="link link-hover"
        >
          Twitter
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
