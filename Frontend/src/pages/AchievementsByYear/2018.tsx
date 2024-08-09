import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styles from "./year.module.css";
import { useState, MouseEvent } from "react";
import pic1 from "./2018-1.jpeg";
import pic2 from "./2018-2.jpeg";
import pic3 from "./2018-3.jpeg";
import pic4 from "./2018-4.jpeg";
import pic5 from "./2018-5.jpeg";
import pic6 from "./2018-6.jpeg";
import pic7 from "./2018-7.jpeg";
import pic8 from "./2018-8.jpeg";
import pic9 from "./2018-9.jpeg";
import pic10 from "./2018-10.jpeg";

const Page2018 = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    // Only close the modal if the click is on the overlay, not inside the modal content
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleGoClickl = () => {
    navigate(`/achievements/2017`); // Redirect to the path corresponding to the selected year
  };

  const handleGoClickr = () => {
    navigate(`/achievements/2019`); // Redirect to the path corresponding to the selected year
  };

  return (
    <div className={`${styles.container} pb-32`}>
      <div className="relative flex grow flex-col items-center p-4 pt-8">
        <div className="mt-2 flex flex-row items-center justify-center gap-4">
          <BsFillArrowLeftCircleFill
            size={25}
            onClick={handleGoClickl}
            className="cursor-pointer"
          />
          <p className="text-3xl font-bold tracking-wide text-blue-700">
            Achievements (2018)
          </p>
          <BsFillArrowRightCircleFill
            size={25}
            onClick={handleGoClickr}
            className="cursor-pointer"
          />
        </div>
        <section className="mt-8 grid gap-6 px-4 py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic1}
              alt="pic1"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic1)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Asia International Mathematical Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2018 AIMO competition.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-100 p-4 px-2 py-0.5 text-slate-700">
                Silver
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic2}
              alt="pic2"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic2)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Hong Kong International Mathematical Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2018 HKIMO competition.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-100 p-4 px-2 py-0.5 text-slate-700">
                Silver
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic3}
              alt="pic3"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic3)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Singapore and Asian Schools Math Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Bronze Award in the 2018 SASMO competition.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-amber-600 p-4 px-2 py-0.5 text-amber-950">
                Bronze
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic4}
              alt="pic4"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic4)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              World Mathematics Invitational Finals
            </div>
            <div className="block p-4 text-slate-500">
              Won the Bronze Award in the 2018 WMI Finals, held in Seoul, South
              Korea.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-amber-600 p-4 px-2 py-0.5 text-amber-950">
                Bronze
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic5}
              alt="pic5"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic5)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              American Mathematical Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2018 AMO competition.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-100 p-4 px-2 py-0.5 text-slate-700">
                Silver
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic6}
              alt="pic6"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic6)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              ICAS Mathematics by UNSW Global
            </div>
            <div className="block p-4 text-slate-500">
              Got Distinction grade in the 2018 ICAS Maths, ranked top 2% in the
              region.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-300 p-4 px-2 py-0.5 text-slate-700">
                Distinction
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic7}
              alt="pic7"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic7)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Indonesia National Piano Festival
            </div>
            <div className="block p-4 text-slate-500">
              Won the Diamond Award in the 2018 INPF.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Diamond
              </div>
              <div className="ml-auto w-fit rounded-full bg-purple-100 p-4 px-2 py-0.5 text-purple-700">
                Piano
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic8}
              alt="pic8"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic8)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              MathsLeague.Org
            </div>
            <div className="block p-4 text-slate-500">
              Won 1st Place in the MathsLeague.Org competition, held in
              Sampoerna Academy Citra Campus
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-yellow-300 p-4 px-2 py-0.5 text-yellow-600">
                1st
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic9}
              alt="pic9"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic9)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Southeast Asian Mathematical Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2018 SEAMO competition.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-100 p-4 px-2 py-0.5 text-slate-700">
                Silver
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic10}
              alt="pic10"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic10)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Thailand International Mathematical Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2018 TIMO competition.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-100 p-4 px-2 py-0.5 text-slate-700">
                Silver
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>
        </section>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black bg-opacity-70"
            onClick={handleOverlayClick}
          >
            <div className="relative rounded bg-white p-4">
              <img
                src={modalImage!}
                alt="Full View"
                className="max-h-screen max-w-full"
              />
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-2xl text-white"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page2018;
