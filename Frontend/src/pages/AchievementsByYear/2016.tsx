import { useState, MouseEvent } from "react";
import styles from "./year.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import pic1 from "./2016-1.jpeg";
import pic2 from "./2016-2.jpeg";
import pic3 from "./2016-3.jpeg";
import pic4 from "./2016-4.jpeg";
import pic5 from "./2016-5.jpeg";
import pic6 from "./2016-6.jpeg";
import pic7 from "./2016-7.jpeg";

const Page2016 = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleGoClick = () => {
    navigate(`/achievements/2017`);
  };

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

  return (
    <div className={`${styles.container} pb-32`}>
      <div className="relative flex grow flex-col items-center p-4 pt-8">
        <div className="mt-2 flex flex-row items-center justify-center gap-4">
          <p className="text-3xl font-bold tracking-wide text-blue-700">
            Achievements (2016)
          </p>
          <BsFillArrowRightCircleFill
            size={25}
            onClick={handleGoClick}
            className="cursor-pointer"
          />
        </div>
        <section className="mt-8 grid gap-6 px-4 py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic1}
              alt="Australian Mathematics Competition"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic1)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Australian Mathematics Competition
            </div>
            <div className="block p-4 text-slate-500">
              Distinction, indicating a high performance level.
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
              src={pic2}
              alt="pic2"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic2)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              International Mathematics Kangaroo Competition
            </div>
            <div className="block p-4 text-slate-500">
              Participated in the 2016 IMKC, Benjamin Division.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-300 p-4 px-2 py-0.5 text-slate-700">
                Participation
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
              Era Musika Music Festival
            </div>
            <div className="block p-4 text-slate-500">
              Won the Silver Award in the 2016 EMMF, Piano Forte 3 Division
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-300 p-4 px-2 py-0.5 text-slate-700">
                Silver
              </div>
              <div className="ml-auto w-fit rounded-full bg-purple-100 p-4 px-2 py-0.5 text-purple-700">
                Piano
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
              Singapore and Asian Schools Math Olympiad
            </div>
            <div className="block p-4 text-slate-500">
              Won the Bronze Award in the 2016 SASMO competition.
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
              Singapore International Math Olympiad Challenge
            </div>
            <div className="block p-4 text-slate-500">
              Won the Bronze Award in the 2016 SIMOC competition, which is the
              final round and the next step after 2016 SASMO. The competition
              was held in Singapore.
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
              src={pic6}
              alt="pic6"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic6)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              ABRSM Grade 1 Exam
            </div>
            <div className="block p-4 text-slate-500">
              Got a 133/150 in the ABRSM Grade 1 Exam, which results in a
              Distinction grade.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-300 p-4 px-2 py-0.5 text-slate-700">
                Distinction
              </div>
              <div className="ml-auto w-fit rounded-full bg-purple-100 p-4 px-2 py-0.5 text-purple-700">
                Piano
              </div>
            </div>
          </article>

          <article className="flex w-full flex-col justify-center rounded-lg bg-white">
            <img
              src={pic7}
              alt="pic7"
              className="h-80 w-full cursor-pointer rounded-md p-4"
              onClick={() => openModal(pic3)}
            />
            <div className="text-dark block p-4 text-xl font-bold">
              Kumon Advanced Student Award
            </div>
            <div className="block p-4 text-slate-500">
              Received the Advanced Student Award from Kumon for studying maths
              5 grades above school grade level.
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <div className="w-fit rounded-full bg-slate-100 p-4 px-2 py-0.5 text-slate-700">
                Misc.
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

export default Page2016;
