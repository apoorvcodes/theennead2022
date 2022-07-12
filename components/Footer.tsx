import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-base-content pl-24 pr-24">
  <div>
  <Image width={100} height={100} src={require("../public/img/logo.png")}/>
    <p className='text-white text-lg'>The Ennead<br/><span className='text-cream'>Providing reliable tech since 1992</span></p>
  </div> 
  <div>
    <span className="footer-title">Links</span> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">committees</a> 
    <a className="link link-hover">Register</a>
  </div> 
  <div>
    <span className="footer-title">Social Media</span> 
    <a className="link link-hover">Instagram</a> 
    <a className="link link-hover">Facebook</a> 
    <a className="link link-hover">Reddit</a> 
    <a className="link link-hover">Twitter</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  )
}

export default Footer