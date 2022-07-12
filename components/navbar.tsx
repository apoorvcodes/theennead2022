import { useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import Link from "next/link";
const Nav = () => {
  const [Open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!Open);
  };
  return (
    <div className="container mx-auto bg-mainbg">
      <div className="flex justify-between pt-4 md:pt-8 pl-8 pr-8 pb-10 md:pb-2">
        <div className="text-4xl md:text-5xl text-cream font-semibold">
          The<span className="text-prime font-bold">Ennead</span>
        </div>
        <div className="text-cream " onClick={() => toggle()}>
          <Hamburger size={34} color="#FD0F49" />
        </div>
      </div>
      {Open ? (
        <motion.nav
          animate={Open ? "open" : "closed"}
          className=" min-w-screen pt-10 pb-4 flex flex-col justify-center items-center space-y-16"
        >
          <motion.div
            className="text-prime
            hover:text-cream 
		text-5xl font-bold opacity-0"
            animate={{ y: 5, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div
            className="text-prime
            hover:text-cream  
		text-5xl font-bold opacity-0"
            animate={{ y: 5, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href="/about">About Us</Link>
          </motion.div>
          <motion.div
            className="text-prime 
            hover:text-cream 
		text-5xl font-bold opacity-0"
            animate={{ y: 5, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href="/committees">Committees</Link>
          </motion.div>
          <motion.div
            className=" w-1/3 md:w-1/4 text-4xl flex bg-cream items-center font-bold bg-red text-prime justify-center pt-4 pb-4 rounded-md shadow border border-transparent transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case"
            animate={{ y: 5, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeiTo3tspIVvluYB8ZFMwFXu8wXOT4ZffJ5f73XVKRSCaZ2Tw/viewform"
            >
              Register
            </a>
          </motion.div>
        </motion.nav>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;
