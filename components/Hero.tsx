import React from 'react'
import Links from './links'
import Link from "next/link"
import Image from 'next/image'
const Hero:React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center  min-h-screen'>
    <Image src={require("../public/img/logo.png")}/>
    <div className="flex justify-center pt-8 flex-col items-center pb-12">
		<div className="text-center">
			<div className="text-5xl text-cream tracking-tight font-semibold sm:text-5xl md:text-7xl text-center">
				<span className="inline-flex">The </span>
				<span className="inline-flex text-prime">Ennead</span>
			</div>
		</div>
		<div
			className="mt-3 text-cream pl-8 text-lg pr-8 md:p-2 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 text-center font-open"
		>
			The first edition of the The Ennead hopes to bring together young people from all around the world together to discuss ideas that can change the world from its grassroots. Change through discourse and communication is our agenda. 
		</div>
		<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-6">
			<div className="rounded-md shadow ">
				<a
					target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeiTo3tspIVvluYB8ZFMwFXu8wXOT4ZffJ5f73XVKRSCaZ2Tw/viewform"
					className="w-full flex items-center justify-center py-4 px-12 font-semibold bg-prime text-cream rounded-md text-2xl border border-transparent transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case"
				>
					Register
				</a>
			</div>
			<div className="rounded-md shadow w-full flex items-center justify-center py-4 px-12 font-semibold bg-gry text-cream text-2xl border border-transparent transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case">
				<Link
					href="/info"
					className=""
				>
					View Details
				</Link>
			</div>
		</div>
		<footer className="text-sm text-center pt-8"><Links/></footer>
	</div>
    </div>
  )
}

export default Hero