import React from "react";
import Image from "next/image";
interface agenda {
  name: string;
  content: string;
  dir: any;
}
const AgendaCard = (props: agenda) => {
  return (
    <div className="flex flex-col ring ring-prime w-2/3 rounded-md justify-center items-center p-8">
      <div className="text-5xl text-cream font-bold">{props.name}</div>
      <div className="flex justify-center items-center space-x-12">
        <Image src={require(`../public/img/${props.dir}`)} />
        <div className="text-lg">{props.content}</div>
      </div>
    </div>
  );
};

export default AgendaCard;
