import Link from "next/link";
const Info = () => {
  return (
    <div className="flex flex-col space-y-24 p-24  justify-center items-center md:items-start md:justify-start min-h-screen md:p-36 bg-mainbg">
      <div className="flex flex-col justify-center items-start">
        <div className="text-7xl text-prime pt-6 md:pt-0 md:text-9xl font-bold">
          Information
        </div>
        <div className="divider w-full md:w-2/3 ">?</div>
        <div className="text-lg p-2 w-full md:w-2/3 text-cream ">
          This year we bring to you a set of 6 enthralling committees and
          agendas along with an International Press. Each of the pages below
          will give you a brief outline of the respective committees and their
          mandate. We have been working tirelessly for the past few months,
          trying to curate for you agendas that have both impacts on the world
          at large and on your psyche as the youth of the world. As the world
          reels under the pressure of countless wars and crises, we aim to let
          the youth of the world decide what should be done, after all, they
          will be world leaders in the years to come. These pages will soon be
          updated with a preliminary research doc, a comprehensive background
          guide and a delegate handbook that will help all delegates to gear up
          for the two days of intense debating. Each page will also contain
          contact information of the secretariat concerned for each committee.
          We hope that you thoroughly enjoy your two days of debating, learn
          from it, come up with viable solutions and in the end, grow both as
          debaters and as people!
        </div>
      </div>
      <div className="flex flex-row space-x-6 items-start">
        <div className="rounded-md shadow w-full flex items-center justify-center py-4 px-12 font-semibold bg-prime text-cream text-2xl border border-transparent transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case">
          <Link href="/committees/agenda" className="">
            Agenda
          </Link>
        </div>
        <div className="rounded-md shadow w-full flex items-center justify-center py-4 px-12 font-semibold bg-prime text-cream text-2xl border border-transparent transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case">
          <Link href="/committees/overview" className="">
            Overview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
