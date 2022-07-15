import React from "react";
import Nav from "./navbar";
import Footer from "./Footer";
const Agenda = () => {
  return (
    <div className="bg-mainbg min-h-screen">
      <Nav />
      <div className="flex flex-col justify-center items-center space-y-24 pt-4 pb-12">
        <div className="text-7xl text-prime font-bold text-semibold">
          Agenda
        </div>
        <div className="divider w-full md:w-2/3  "></div>
        <div className="flex space-y-12  flex-col ring ring-prime w-2/3 rounded-md justify-center items-center p-8">
          <div className="text-5xl text-cream font-bold">UNSC</div>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-12">
            {/* <Image src={require("../../public/img/unsc.png")} width={400} height={400} /> */}
            <div className="text-lg">
              With more than 6.8 million refugees leaving Ukraine, around 3,500
              civilians killed, the aggressors losing a thousand tanks, more
              than 25 countries pledging to help the Ukraine military defence
              (the US reportedly spending $100 million every single day), a
              conflict has grown into an all out war. And it seems to have
              extended into the economic base as well, as the US and NATO put
              several sanctions on Russia. As the sanctions are designed to
              wreak the Russian economy, we see the US, UK, the EU and Canada to
              be the major players- wishing to hold Russia to account and
              collectively ensure that this war is a strategic failure for
              Putin. The world has been divided over the Ukraine conflict,
              making it as of right now, one of the most important violent
              issues to resolve.
            </div>
          </div>
        </div>
        <div className="flex  space-y-12  flex-col ring ring-prime w-2/3 rounded-md justify-center items-center p-8">
          <div className="text-5xl text-cream font-bold">UNGA-I DISEC</div>
          <div className="flex justify-center items-center space-x-12">
            {/* <Image src={require("../../public/img/unga.png")} width={400} height={400} /> */}
            <div className="text-lg">
              Asymmetric warfare (or asymmetric engagement) is the term given to
              describe a type of war between belligerents whose relative
              military power differs significantly, or whose strategy or tactics
              differ significantly. This is typically a war between a standing,
              professional army and an insurgency or resistance movement militia
              who often have the status of unlawful combatants. Asymmetric
              warfare can describe a conflict in which two belligerents
              resources are uneven and, in the struggle, interact and attempt to
              exploit each others characteristic weaknesses. Such struggles
              often involve strategies and tactics of unconventional warfare,
              the weaker combatants attempting to use strategy to offset
              deficiencies in quantity or quality of their forces and
              equipment.[1] Such strategies may not necessarily be
              militarized.[2] This is in contrast to symmetric warfare, where
              two powers have comparable military power and resources and rely
              on tactics that are similar overall, differing only in details and
              execution. Asymmetric warfare is a form of irregular warfare –
              violent conflict between a formal military and an informal, less
              equipped and supported, understaffed but resilient and motivated
              opponent. The term is frequently used to describe what is also
              called guerrilla warfare, insurgency, counterinsurgency,
              rebellion, terrorism, and counter-terrorism.
            </div>
          </div>
        </div>
        <div className="flex space-y-12  flex-col ring ring-prime w-2/3 rounded-md justify-center items-center p-8">
          <div className="text-5xl text-cream font-bold">UN Women</div>
          <div className="flex justify-center items-center space-x-12">
            {/* <Image src={require("../../public/img/un_women.png")}  width={400} height={400}/> */}
            <div className="text-lg">
              Many women in Afghanistan experience at least one form of abuse.
              In 2015, the World Health Organisation reported that 90% of women
              in Afghanistan had experienced at least one form of domestic
              violence. Violence against women is widely tolerated by the
              community, and it is widely practiced in Afghanistan. Violence
              against women in Afghanistan ranges from verbal abuse and
              psychological abuse to physical abuse and unlawful killing. From
              infancy, girls and women are under the authority of their fathers
              or husbands. Their freedom of movement is restricted since they
              are children and their choice of husbands is also restricted.
              Women and girls are deprived of education and denied economic
              liberty. In their pre-marriage and post-marriage relationships,
              their ability to assert their economic and social independence is
              limited by their families. Most married Afghan females are faced
              with the stark reality that they are forced to endure abuse. If
              they try to extricate themselves from the situation of abuse, they
              invariably face social stigma, social isolation, persecution for
              leaving their homes by the authorities and honor killings by
              their relatives.
            </div>
          </div>
        </div>
        
        <div className="flex space-y-12  flex-col ring ring-prime w-2/3 rounded-md justify-center items-center p-8">
          <div className="text-5xl text-cream font-bold">UNHRC</div>
          <div className="flex justify-center items-center space-x-12">
            {/* <Image src={require("../../public/img/unhrc.png")} width={400} height={400} /> */}
            <div className="text-lg">
              The Syrian civil war started when major conflict broke out March
              15, 2011, after a forceful crackdown on peaceful student protests
              against the government of Bashar al-Assad. Conflict continues with
              insecurity in parts of the country. The consequences are tragic
              for civilians, particularly children. Since then, a peaceful
              protest against the leader has turned into an all out civil war.
              About 6.8 million Syrians are refugees and asylum-seekers, and
              another 6.7 million people are displaced within Syria. This means
              13.5 million Syrians in total are forcibly displaced, more than
              half of the countrys population. Nearly 11.1 million people in
              Syria need humanitarian assistance.
            </div>
          </div>
        </div>
        <div className="flex space-y-12  flex-col ring ring-prime w-2/3 rounded-md justify-center items-center p-8">
          <div className="text-5xl text-cream font-bold">ECOSOC</div>
          <div className="flex justify-center items-center space-x-12">
            {/* <Image src={require("../../public/img/ecosoc.png")} width={400} height={400} /> */}
            <div className="text-lg">
              OBOR is an initiative to revive Chinas old Silk Trade Route1,
              which used to pass through Asia, Africa and Europe in ancient
              times and promoted the progress of human civilization contributing
              greatly to the prosperity and development of the countries along
              this trade route. The blueprint of the revival plan in the name of
              the “one belt one road” initiative was presented by Chinas
              National Development and Reform Commission (NDRC) in 2013. Since
              then the project has become the single largest focal point of
              Chinas foreign policy. The project links Eurasian landmass with
              Indo-Pacific maritime routes through road, rail and port projects.
              A number of flagship projects have been announced this grand
              initiative such as China-Pakistan Economic Corridor (CPEC), New
              Eurasian Land Bridge, Bangladesh-China-India-Myanmar (BCIM),
              China- Indochina Peninsula Economic Corridor,
              China-Mongolia-Russia Economic Corridor, China-Central Asia- West
              Asia Corridor and 21st Century Maritime Silk Road.
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default Agenda;
