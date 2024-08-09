import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styles from "./year.module.css";
import { useState, MouseEvent } from "react";
import pic1 from "./2019-1.jpeg";
import pic3 from "./2019-3.jpeg";
import pic4 from "./2019-4.jpeg";
import pic7 from "./2019-7.jpeg";
import pic8 from "./2019-8.jpeg";

const Page2019 = () => {
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
    navigate(`/achievements/2018`); // Redirect to the path corresponding to the selected year
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
            Achievements (2019)
          </p>
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
              Indonesia Piano Competition
            </div>
            <div className="block p-4 text-slate-500">
              Won 2nd Prize in the 2019 IPC.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-300 p-4 px-2 py-0.5 text-slate-700">
                2nd
              </div>
              <div className="ml-auto w-fit rounded-full bg-purple-100 p-4 px-2 py-0.5 text-purple-700">
                Piano
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <div className="h-80 p-4">
              <div className="h-full w-full rounded-md bg-slate-500" />
            </div>
            <div className="text-dark block p-4 text-xl font-bold">
              Thailand International Mathematical Olympiad Finals
            </div>
            <div className="block p-4 text-slate-500">
              Won the Bronze Award in the 2019 TIMO Finals, held in Phuket,
              Thailand.
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
              src={pic3}
              alt="pic3"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic3)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Southeast Asian Mathematical Olympiad Extended Round
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2019 SEAMO X competition, held in
              Singapore.
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
              src={pic4}
              alt="pic4"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic4)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              World Mathematics Invitational
            </div>
            <div className="block p-4 text-slate-500">
              Won Gold Award in the 2019 WMI competition
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-yellow-300 p-4 px-2 py-0.5 text-yellow-600">
                Gold
              </div>
              <div className="ml-auto w-fit rounded-full bg-blue-100 p-4 px-2 py-0.5 text-blue-700">
                Mathematics
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <div className="h-80 p-4">
              <div className="h-full w-full rounded-md bg-slate-500" />
            </div>
            <div className="text-dark block p-4 text-xl font-bold">
              Hong Kong International Mathematical Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2019 HKIMO competition.
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
            <div className="h-80 p-4">
              <div className="h-full w-full rounded-md bg-slate-500" />
            </div>
            <div className="text-dark block p-4 text-xl font-bold">
              Asia International Mathematical Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Bronze Award in the 2019 AIMO competition.
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
              src={pic7}
              alt="pic7"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic7)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              World Mathematics Invitational Finals
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2019 WMI Finals, held in Fukuoka,
              Japan.
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
              src={pic8}
              alt="pic8"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic8)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Hanyu Shuiping Kaoshi (汉语水平考试)
            </div>
            <div className="block p-4 text-slate-500">
              Passed the HSK Level 3 exam.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-100 p-4 px-2 py-0.5 text-slate-700">
                Misc.
              </div>
              <div className="ml-auto w-fit rounded-full bg-red-100 p-4 px-2 py-0.5 text-red-700">
                Mandarin
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

export default Page2019;
