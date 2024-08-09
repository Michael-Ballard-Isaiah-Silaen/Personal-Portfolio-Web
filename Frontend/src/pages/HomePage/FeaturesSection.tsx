import FeatureBox from "../../components/HomePage/FeatureBox";
import { MdBusinessCenter } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { SiLitiengine } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { IoCarSportSharp } from "react-icons/io5";
import { GiWatch } from "react-icons/gi";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="pn-10 mx-auto flex h-fit w-full max-w-[1200px] flex-col items-center justify-center px-4 pt-20"
    >
      <h2 className="text-3xl font-bold tracking-wide text-blue-700">
        Interests
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-4 py-4">
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <MdBusinessCenter size={30} color="#4a6cf7" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            Business
          </h3>
          <p className="text-start text-[#8890a0]">
            I have an innate sense of curiosity on how to build, run, and
            sustain a corporation. I believe that I can create benefits and add
            value to society through the products or services that my companies
            provide. Currently searching for ideas and co-founders.
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <GiTechnoHeart size={30} color="#4a6cf7" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            Technology
          </h3>
          <p className="text-start text-[#8890a0]">
            I am interested in technological developments across various
            sectors, constantly staying updated on innovations in fields such as
            information technology, cybersecurity, automotive engineering, and
            artificial intelligence.
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <SiLitiengine size={30} color="#4a6cf7" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            Software Engineering
          </h3>
          <p className="text-start text-[#8890a0]">
            Always one of the specific fields that I am keen to constantly
            develop a skill in. Currently studying both Web and App Development.
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <FaChartLine size={30} color="#4a6cf7" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            Stocks and Forex
          </h3>
          <p className="text-start text-[#8890a0]">
            Currently studying both short-term trading and long term investing
            in both of these markets.
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <MdOutlineSecurity size={30} color="#4a6cf7" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            Cybersecurity
          </h3>
          <p className="text-start text-[#8890a0]">
            Interested in how several cybersecurity methods work, and I like to
            do a little bit of legal pen-testing.
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <IoIosGlobe size={30} color="#4a6cf7" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            World Politics
          </h3>
          <p className="text-start text-[#8890a0]">
            I have quite an extensive knowledge on various ideologies, political
            nuances, governments, and their history.
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <IoCarSportSharp size={30} color="#4a6cf7" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">Cars</h3>
          <p className="text-start text-[#8890a0]">
            Always been a petrolhead since I am young, avidly following various
            motorsports. I appreciate a wide range of cars, from hot hatches to
            hypercars, and have a particular fondness for certain German,
            Japanese, Italian, and American automobiles.
          </p>
        </FeatureBox>
        <FeatureBox>
          <div className="ml-1 rounded-lg bg-[#eaedfb] p-2">
            <GiWatch size={30} color="#4a6cf7" />
          </div>
          <h3 className="text-left text-2xl font-bold text-[#252a35]">
            Watches
          </h3>
          <p className="text-start text-[#8890a0]">
            Recently got into appreciating the art of horology, and planning to
            build a watch collection.
          </p>
        </FeatureBox>
      </div>
    </section>
  );
};

export default FeaturesSection;
