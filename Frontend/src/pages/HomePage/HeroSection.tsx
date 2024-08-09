import { NavLink } from "react-router-dom";
import SvgBottomLeft from "./SvgBottomLeft";
import { TypeAnimation } from "react-type-animation";
import { GiTrophy } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[70vh] w-full">
      <SvgBottomLeft />
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2 py-4">
          <h1 className="mt-16 font-bold tracking-wide text-blue-700 sm:text-2xl lg:text-5xl">
            Michael Ballard Isaiah Silaen
          </h1>
          <h2 className="text-blue-700">Fullstack developer, Entrepreneur.</h2>
        </div>
        <TypeAnimation
          sequence={[
            "Aspiring Technopreneur.",
            1000,
            "Visionary.",
            1000,
            "Visionary. Risk-taker.",
            1000,
            "Visionary. Risk-taker. Strategist.",
            1000,
          ]}
          wrapper="h3"
          className="max-w-[70vw] text-center"
          speed={50}
          repeat={Infinity}
        />

        <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 md:gap-8 md:py-12">
          <NavLink to="/projects" className="group">
            <button className="relative aspect-square h-auto w-[150px] rounded-lg md:w-[200px]">
              <div className="absolute -inset-[1px] aspect-auto h-auto w-[152px] rounded-lg bg-gradient-to-tr from-blue-400 to-purple-900 blur-sm duration-200 ease-in group-hover:blur md:w-[202px]" />
              <div className="relative flex h-full w-full flex-col items-center justify-between rounded-lg bg-white p-4 md:p-8">
                <div className="flex flex-col items-center">
                  <h2 className="mb-3 text-xl font-bold uppercase text-blue-800">
                    projects
                  </h2>
                  <MdOutlineWorkHistory size={45} color="#60a5fa" />
                </div>
                <p className="text-xs">My project history.</p>
              </div>
            </button>
          </NavLink>
          <NavLink to="/achievements" className="group">
            <button className="relative aspect-square h-auto w-[150px] rounded-lg md:w-[200px]">
              <div className="absolute -inset-[1px] aspect-auto h-auto w-[152px] rounded-lg bg-gradient-to-tr from-blue-400 to-purple-900 blur-sm duration-200 ease-in group-hover:blur md:w-[202px]" />
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-white">
                <div className="relative flex h-full w-full flex-col items-center justify-between rounded-lg bg-white p-4 md:p-8">
                  <div className="flex flex-col items-center">
                    <h2 className="mb-3 text-xl font-bold uppercase text-blue-800">
                      achievements
                    </h2>
                    <GiTrophy size={45} color="#60a5fa" />
                  </div>
                  <p className="text-xs">My achievements.</p>
                </div>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
