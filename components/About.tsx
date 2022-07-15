import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="flex flex-col-reverse space-y-36 md:space-x-0 p-24 justify-center items-center md:justify-center min-h-screen md:p-36 bg-mainbg">
     <Image
        className="pl-12 rounded-2xl pr-12 pb-12 md:p-0"
        src={require("../public/img/ind.jpeg")}
      />
     
      <div className="flex flex-col justify-center items-start">
        <div className="text-5xl pt-12  md:pt-0 md:text-9xl font-bold">About Us</div>
        <div className="divider w-full md:w-2/3 ">?</div>
        <div className="text-lg p-2 w-full md:w-2/3 text-cream pb-12 ">
        In the spirit of promoting youth led events, Sunbeam Bhagwanpur is proud to host its first edition of The Ennead Model United Nations organised in full capacity by the MUN Club of Bhagwanpur. Spanning months of preparation boiling down to two days of intense committee debate and discussion involving the bright minds of middle and highschool students, the goal is to encourage the youth to speak up and give their opinions on issues plaguing the entire world, letting them know that their opinion does in fact matter. With the world struggling with the constant turmoil of war, strife and its after effects, this year’s conference is modelled to create a platform for young minds to be able to make a fair share of the contribution- because only by exposing them can we guarantee a future world where peace and harmony are not just abstract concepts. The MUN Club has carefully curated agendas which deal with the constant threats that the modern world faces and let the delegates equip themselves with revolutionary ideas of their own. Simulations such as The Ennead are invaluable educational tools, as they teach our future leaders about the United Nations and the international community through intensively researched debate with their peers in a setting moderated by students from the most elite universities. In their committees, students are exposed to talented and inspiring speakers that come from many different relevant organisations and backgrounds as their Executive Board.

        </div>
      </div>
      <Image
        width={2000}
        height={1500}
        className="pl-12 pr-12 pb-12 md:p-0"
        src={require("../public/img/group_pic.png")}
      />
    </div>
  );
};

export default About;
