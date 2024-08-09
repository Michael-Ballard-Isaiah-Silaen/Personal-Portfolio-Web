import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { NavHashLink } from "react-router-hash-link";
import mikelogo from "../components/universal/mikelogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGoClick = () => {
    navigate(`/personal`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = {
    navBarScrolled: twMerge(
      `${isScrolled ? "h-16 backdrop-blur-md bg-white/70 shadow-md" : "h-24"}`,
      ` ${isMobileMenuOpen && "bg-white"}`,
    ),
    buttonScrolled: isScrolled ? "py-2" : "py-4",
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[100] flex w-screen items-center justify-between px-6 font-[500] duration-100 ease-in lg:px-24 ${className.navBarScrolled}`}
    >
      <div className="flex flex-row gap-2">
        <img
          src={mikelogo}
          alt="Mike Logo"
          className="h-8 w-8 cursor-pointer"
          onClick={handleGoClick}
        />
        <NavLink
          to="/"
          className="cursor-pointer text-2xl font-bold tracking-wide text-blue-700"
        >
          MB
        </NavLink>
      </div>
      <div className="flex gap-4">
        <nav className="hidden cursor-pointer items-center justify-center gap-8 md:flex">
          <NavHashLink to="/#home" smooth className="hover:text-blue-600">
            Home
          </NavHashLink>
          <NavHashLink
            to="/#features"
            smooth
            className="cursor-pointer hover:text-blue-600"
          >
            Interests
          </NavHashLink>
          <NavHashLink
            to="/#about"
            smooth
            className="cursor-pointer hover:text-blue-600"
          >
            About
          </NavHashLink>
          <button className="group relative flex h-fit items-center gap-1">
            Pages{" "}
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              className="text-black"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                fill="black"
              ></path>
            </svg>
            <div className="absolute bottom-0 right-0 h-0 translate-y-[100%] p-2 pt-4 opacity-0 group-hover:h-fit group-hover:opacity-100">
              <div className="hidden flex-col items-stretch rounded-lg border-[1px] bg-white p-2 text-start shadow-md group-hover:flex">
                <NavLink
                  to="/projects"
                  className="text-nowrap p-2 hover:text-blue-500"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/achievements"
                  className="text-nowrap p-2 hover:text-blue-500"
                >
                  Achievements
                </NavLink>
              </div>
            </div>
          </button>
        </nav>
        <div className="flex h-full items-center justify-center md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <RxHamburgerMenu size={35} />
          </button>
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 z-50 min-h-screen w-screen bg-white p-6 transition-transform duration-300 ${!isMobileMenuOpen ? "-translate-y-[100%]" : isScrolled ? "translate-y-16" : "translate-y-24"} md:hidden`}
      >
        <nav className="flex flex-col items-center gap-6">
          <NavHashLink
            to="/#home"
            smooth
            className="hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavHashLink>
          <NavHashLink
            to="/projects"
            smooth={true}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </NavHashLink>
          <NavHashLink
            to="/achievements"
            smooth={true}
            className="cursor-pointer hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Achievements
          </NavHashLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
