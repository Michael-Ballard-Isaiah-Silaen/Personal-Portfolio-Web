import styles from "./MikeProfilePage.module.css";
import mikepic from "./mikepic.png";
import Page1 from "./Page1.png";
import Page2 from "./Page2.png";
import Page3 from "./Page3.png";
import Page4 from "./Page4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MikeProfilePage = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={`${styles.container} pb-32`}>
      <p className="mt-16 text-3xl font-bold tracking-wide text-blue-700">
        Profile Page
      </p>
      <div className="mb-10 mt-10 flex w-[90%] max-w-4xl flex-col items-center gap-4 rounded-xl bg-slate-100 bg-opacity-70 px-8 py-4 md:mb-10 md:mt-10 md:w-[65%] md:flex-row">
        <img
          src={mikepic}
          alt="Mike"
          className="h-64 max-w-full rounded-lg shadow-lg"
        />
        <div className="flex w-full grow flex-col gap-2 overflow-hidden rounded-lg bg-white px-4 py-2 shadow-lg md:w-[65%]">
          <p className="text-xl font-bold text-black md:text-lg">
            Personnel Data
          </p>
          <p className="md:text-md block truncate text-xs font-bold text-black">
            Name: Michael Ballard Isaiah Silaen
          </p>
          <p className="md:text-md block truncate text-xs font-bold text-black">
            Date of Birth: 01/01/2006
          </p>
          <p className="md:text-md block truncate text-xs font-bold text-black">
            Height: 188cm (6'1")
          </p>
          <p className="md:text-md block truncate text-xs font-bold text-black">
            Institution: Institut Teknologi Bandung (ITB)
          </p>
          <p className="md:text-md block truncate text-xs font-bold text-black">
            Faculty: STEI-K
          </p>
          <p className="md:text-md block truncate text-xs font-bold text-black">
            Major: Sistem dan Teknologi Informasi (STI)
          </p>
        </div>
      </div>
      <div className="mx-auto h-auto w-[60%]">
        <Slider {...settings}>
          <div>
            <img
              src={Page1}
              alt="Page 1"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={Page2}
              alt="Page 2"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={Page3}
              alt="Page 3"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src={Page4}
              alt="Page 4"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MikeProfilePage;
