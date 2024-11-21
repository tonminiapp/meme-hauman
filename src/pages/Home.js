import React from "react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Title from "../components/Title";
import InstagramIcon from "../assets/images/instagram.svg";
import YoutubeIcon from "../assets/images/youtube.svg";
import TwitterIcon from "../assets/images/twitter.svg";
import Label from "../components/Label";
import SmallCard from "../components/SmallCard";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import HanumanImage from "../assets/images/hanuman.png";
import ChartTokenomics from "../assets/images/chart.png";
import CheckIcon from "../assets/images/check.png";
import PresaleCard from "../components/PresaleCard";
import { ArcherContainer, ArcherElement } from 'react-archer';
import Faq from "../components/Faq";

const headerLinks = [
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Roadmap',
    href: '#roadmap'
  },
  {
    label: 'Tokenomics',
    href: '#tokenomics'
  },
  {
    label: 'Faq',
    href: '#faq'
  },
]

export default function Home() {
  return (
    <div className="relative pt-10 max-md:pt-4">
      <img className="absolute top-0 left-0 w-full h-[1000px] object-cover max-lg:h-[850px] max-md:h-[650px] z-[-1] object-bottom" src="/images/bg_main.png" alt="bg" />
      <div className="container z-0 max-md:overflow-hidden">
        <NavBar />

        <div className="mt-20 max-md:mt-14 flex flex-col text-center items-center justify-center m-auto max-w-[1100px] w-full px-2">
          <Label>The Fiercest Token on Solana!</Label>
          <div className="text-[56px] max-md:text-[30px] leading-none mt-5">Unleash the Power of Hanuman</div>
          <div className="font-jaka leading-[35px] max-md:text-[16px] max-md:leading-[24px] font-medium text-[20px] max-w-[800px] mt-5 max-md:mt-3">
            Join our dynamic community of meme lovers and crypto enthusiasts, and harness the energy of the fiercest Hanuman in the solana jungle!
          </div>
        </div>

        <img className="object-contain mx-auto mt-10 md:w-[200px] w-[150px] lg:w-[400px] max-md:mt-6" src={HanumanImage} alt="Hanuman" />

        {/* About Section */}
        <section className="flex items-center justify-between mt-60 max-md:mt-14 max-md:text-center max-md:flex-col-reverse max-md:justify-center" id="about">
          <div>
            <div className="flex items-center w-full max-md:justify-center">
              <Title>About</Title>
              <div className="text-primary uppercase text-[40px] max-md:text-[32px] ml-4">Hanuman</div>
            </div>
            <div className="text-[16px] max-md:text-[14px] leading-[35px] max-md:leading-[24px] font-jaka w-full max-w-[560px]">
              Welcome to Hanuman, the fiercest and most energetic token on the Solana blockchain! Inspired by the audacious spirit of the Hanuman, our token embodies the perfect blend of fun and fearlessness. Hanuman isn't just another meme token; it's a revolution in the crypto world
            </div>
            <div className="max-md:m-auto max-md:w-fit">
              <div className="flex items-center gap-3 mt-8">
                <img className="" src={CheckIcon} alt="check" />
                <div className="font-jaka font-semibold text-[16px]">Community-Driven</div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <img className="" src={CheckIcon} alt="check" />
                <div className="font-jaka font-semibold text-[16px]">Innovative & Fast</div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <img className="" src={CheckIcon} alt="check" />
                <div className="font-jaka font-semibold text-[16px]">Playful Yet Powerful</div>
              </div>
            </div>
            <Button className="mt-10 max-md:m-auto max-md:mt-8">Buy Hanuman</Button>
          </div>
          <div className="relative">
            <img className="max-md:mt-16 w-[80%] md:w-[600px] max-md:m-auto" src={HanumanImage} alt="Hanuman" />
            <div className="absolute bg-[#4C0665] z-[-1] opacity-70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[518px] h-[582px] blur-[250px] max-md:w-[250px] max-md:h-[300px] max-md:blur-[120px] rounded-full"></div>
          </div>
        </section>

        {/* How-to-buy Section */}
        <section className="mt-60 max-md:mt-32 max-md:text-center">
          <Title className="text-center">How to buy</Title>
          <div className="flex items-center justify-center gap-10 mt-10 max-lg:flex-col">
            <div className="max-w-[335px] w-full max-md:max-w-none">
              <div className="m-auto py-[6px] px-[10px] w-fit rounded-[6px] leading-none text-black bg-white text-[24px] mb-10 relative">
                01
                <div className="h-[3px] bg-[#833181] w-[750px] absolute top-[15px] left-0 z-[-1] max-lg:hidden"></div>
              </div>
              <SmallCard
                title="Solana Wallet"
                description="Download a Solana wallet of your choice, such as Phantom or Solflare browser extensions."
              />
            </div>
            <div className="max-w-[335px] w-full max-md:max-w-none">
              <div className="m-auto py-[6px] px-[10px] w-fit rounded-[6px] leading-none text-black bg-white text-[24px] mb-10">02</div>
              <SmallCard
                title="Get Some Solana"
                description="Acquire some Solana (SOL), either through your wallet or via an exchange"
              />
            </div>
            <div className="max-w-[335px] w-full max-md:max-w-none">
              <div className="m-auto py-[6px] px-[10px] w-fit rounded-[6px] leading-none text-black bg-white text-[24px] mb-10">03</div>
              <SmallCard
                title="Buy Hanuman"
                description="Paste in the Hanuman address. Select the amount you want to purchase and confirm your transaction"
              />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="mt-60 max-md:mt-32 max-md:text-center" id="roadmap">
          <Title className="relative text-center">
            Roadmap
            <div className="absolute bg-[#4C0665] z-[-1] opacity-70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[518px] h-[582px] blur-[250px] max-md:w-[250px] max-md:h-[300px] max-md:blur-[120px] rounded-full"></div>
          </Title>
          <ArcherContainer noCurves strokeColor="#FF7DFA50">
            <div className="flex flex-col gap-16 mt-20">
              <div className="flex justify-end">
                <ArcherElement
                  id="root"
                  relations={[
                    {
                      targetId: 'step2',
                      targetAnchor: 'top',
                      sourceAnchor: 'left',
                      style: { strokeDasharray: '20,20' },
                    },
                  ]}
                >
                  <div>
                    <Card
                      title="Where it all began!"
                      description="With a few degen frens and a lot of energy, we bashed out brainstorming ideas, creating the whitepaper, and outlining the project's plan."
                      className="max-w-[500px] max-md:m-auto max-md:mt-10"
                    />
                  </div>
                </ArcherElement>
              </div>
              <div className="flex justify-start">
                <ArcherElement
                  id="step2"
                  relations={[
                    {
                      targetId: 'step3',
                      targetAnchor: 'top',
                      sourceAnchor: 'right',
                      style: { strokeDasharray: '20,20' },
                    },
                  ]}
                >
                  <div>
                    <Card
                      title="Collaboration with the coolest KOLs "
                      description="Teaming up with the most dope Key Opinion Leaders and strategic investors for support and marketing. It's all about making some noise!"
                      className="max-w-[500px] max-md:m-auto max-md:mt-10"
                    />
                  </div>
                </ArcherElement>
              </div>
              <div className="flex justify-end">
                <ArcherElement
                  id="step3"
                  relations={[
                    {
                      targetId: 'step4',
                      targetAnchor: 'top',
                      sourceAnchor: 'left',
                      style: { strokeDasharray: '20,20' },
                    },
                  ]}
                >
                  <div>
                    <Card
                      title="Meme Extravaganza!"
                      description="Launching the coin on our own launchpad and other major platforms, focusing on hyped social growth and brand awareness. Get ready for the hype!"
                      className="max-w-[500px] max-md:m-auto max-md:mt-10"
                    />
                  </div>
                </ArcherElement>
              </div>
              <div className="flex justify-start">
                <ArcherElement
                  id="step4"
                  relations={[
                    {
                      targetId: 'step5',
                      targetAnchor: 'top',
                      sourceAnchor: 'right',
                      style: { strokeDasharray: '20,20' },
                    },
                  ]}
                >
                  <div>
                    <Card
                      title="Ecosystem Expansion"
                      description="Scaling the ecosystem and officially launching the product to the market. The MEMEFam gets to use the ecosystem to its full potential. Let the fun begin!"
                      className="max-w-[500px] max-md:m-auto max-md:mt-10"
                    />
                  </div>
                </ArcherElement>
              </div>
              <div className="flex justify-end">
                <ArcherElement
                  id="step5"
                  relations={[
                    {
                      targetId: 'step6',
                      targetAnchor: 'top',
                      sourceAnchor: 'left',
                      style: { strokeDasharray: '20,20' },
                    },
                  ]}
                >
                  <div>
                    <Card
                      title="$HNMN Official Launch"
                      description="Rolling out the $HNMN with strategic marketing campaigns to promote its adoption around the globe, baby. Time to shine!"
                      className="max-w-[500px] max-md:m-auto max-md:mt-10"
                    />
                  </div>
                </ArcherElement>
              </div>
              <div className="flex justify-start">
                <ArcherElement
                  id="step6"
                  relations={[
                    {
                      targetId: 'step7',
                      targetAnchor: 'top',
                      sourceAnchor: 'right',
                      style: { strokeDasharray: '20,20' },
                    },
                  ]}
                >
                  <div>
                    <Card
                      title="Hanuman Storytime"
                      description="With a few degen frens and a lot of energy, we bashed out brainstorming ideas, creating the whitepaper, and outlining the project's plan."
                      className="max-w-[500px] max-md:m-auto max-md:mt-10"
                    />
                  </div>
                </ArcherElement>
              </div>
              <div className="flex justify-end">
                <ArcherElement
                  id="step7"
                >
                  <div>
                    <Card
                      title="To the MOON, fam!"
                      description="This is where we motherf***ing MOON, fam. Degens become Rich AF and name their kids after us. Let's make history together!"
                      className="max-w-[500px] max-md:m-auto max-md:mt-10"
                      light={true}
                    />
                  </div>
                </ArcherElement>
              </div>
            </div>
          </ArcherContainer>
        </section>

        {/* Tokenomics Section */}
        <section className="pt-40 mt-40 max-md:!bg-cover max-md:!bg-center -ml-5 max-md:mt-32 max-md:pt-30 max-md:text-center max-md:!w-[calc(100%+35px)]" style={{
          backgroundImage: "url('/images/bg_tokenomics.png')",
          backgroundSize: "100% 1000px",
          backgroundRepeat: "no-repeat",
        }} id="tokenomics">
          <Title className="text-center">
            Tokenomics
          </Title>
          <div className="flex items-center justify-between max-md:flex-col">
            <div>
              <img className="w-[80%] md:w-[600px]" src={HanumanImage} alt="Hanuman" />
            </div>
            <div className="pr-5">
              <img className="" src={ChartTokenomics} alt="chart" />
            </div>
          </div>
        </section>

        {/* Faq Section */}
        <section className="mt-40 max-md:mt-20" id="faq">
          <Faq />
        </section>

        {/* Community Section */}
        <section className="relative mt-96 max-md:mt-48">
          <div
            className="relative border border-[#91268E] mb-[14px] p-8 rounded-[30px]"
            style={{
              boxShadow: `0px 10px 0 #EC52E7`,
              backgroundImage: "url('/images/bg_social.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#91268E10",
            }}
          >
            <div className='text-[32px] max-md:text-[24px] leading-none mb-6 max-md:text-center'>
              Join The Community
            </div>
            <div className='text-[16px] max-md:text-[14px] leading-[35px] max-md:leading-[24px] flex items-center gap-6 max-md:flex-col'>
              <Button className="">Buy Hanuman</Button>
              <div className="flex items-center gap-5">
                <IconButton icon={InstagramIcon} />
                <IconButton icon={YoutubeIcon} />
                <IconButton icon={TwitterIcon} />
              </div>
            </div>
          </div>
          <img className="absolute bottom-10 right-10 md:w-[200px] w-[90px] left-1/2 -translate-x-1/2 -top-28" src={HanumanImage} alt="Hanuman" />
        </section>
      </div>

      {/* Footer */}
      <div className="bg-[#91268E10] text-white mt-24">
        <div className="flex items-center justify-between px-16 py-8 max-md:flex-col max-md:justify-center"
          style={{
            boxShadow: `0px 10px 0 #EC52E7`,
            backgroundImage: "url('/images/bg_footer.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#91268E10",
          }}
        >
          <div className='flex items-center gap-3'>
            <img className='w-10 h-10' src="/logo.png" alt="logo" />
            <div className='uppercase text-[24px] max-md:text-[18px]'>Hanuman</div>
          </div>
          <ul className='flex items-center gap-8 list-none max-lg:gap-4 max-md:mt-5'>
            {
              headerLinks.map(link => (
                <li
                  key={link.href}
                  className='uppercase text-[16px] cursor-pointer hover:text-primary transition ease-in-out'
                >
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="bg-[#FF5DF9] text-[24px] max-md:text-[18px] leading-none text-center py-8">
          2024 Hanuman © All Rights Reserved.
        </div>
      </div>
    </div >
  );
}