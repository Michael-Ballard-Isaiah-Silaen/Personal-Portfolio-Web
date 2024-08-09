import styles from "./ProjectsPage.module.css";
import logogh from "./logogh.png";
import logosyntax from "./logosyntax.png";
import logoitb from "./logoitb.png";

const ProjectPage = () => {
  return (
    <div className={`${styles.container} pb-32`}>
      <div className="relative flex grow flex-col items-center pt-10">
        <div className="mt-2 flex flex-row items-center justify-center gap-4">
          <p className="mt-6 text-3xl font-bold tracking-wide text-blue-700">
            Project History
          </p>
        </div>
        <section className="mt-8 grid gap-4 px-8 py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <article className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-blue-100 p-2">
            <img
              src={logogh}
              className="aspect-square h-32 w-32 items-center justify-center rounded-md"
            />

            <div className="flex flex-col p-2">
              <p className="text-dark block p-2 text-xl font-bold text-black">
                Garuda Hacks 5.0
              </p>
              <p className="block p-2">
                Participated in the Garuda Hacks 5.0 Hackathon with my friends
                Yonatan and Dave, where we built NReport, a neighbourhood watch
                website in under 36 hours. I worked on both the frontend and
                backend. Funfact: Some of the assets on this website is reused
                from NReport (with both of their approval, of course).
              </p>
            </div>
          </article>

          <article className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-blue-100 p-2">
            <img
              src={logosyntax}
              className="aspect-square h-32 w-32 items-center justify-center rounded-md"
            />
            <div className="flex flex-col p-2">
              <p className="text-dark block p-2 text-xl font-bold text-black">
                BPA STEI-K
              </p>
              <p className="block p-2">
                I am a part of the Badan Pengurus Angkatan (BPA) STEI-K 2023, IT
                Division. I helped in a coordinated effort to build the
                generation's website, particularly focusing on the frontend
                development.
              </p>
            </div>
          </article>

          <article className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-blue-100 p-2">
            <img
              src={logosyntax}
              className="aspect-square h-32 w-32 items-center justify-center rounded-md"
            />
            <div className="flex flex-col p-2">
              <p className="text-dark block p-2 text-xl font-bold text-black">
                Aksi Angkatan STEI-K 2023
              </p>
              <p className="block p-2">
                I contributed to the development of the website used for the
                "Aksi Angkatan" by the STEI-K Faculty. On this project, I helped
                with the backend development.
              </p>
            </div>
          </article>

          <article className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-blue-100 p-2">
            <img
              src={logoitb}
              className="aspect-square h-32 w-32 items-center justify-center rounded-md"
            />
            <div className="flex flex-col p-2">
              <p className="text-dark block p-2 text-xl font-bold text-black">
                Tugas Besar Dasar Programming 2024
              </p>
              <p className="block p-2">
                I worked together with 4 other teammates to build a Project
                using Python, in which the project revolves around replicating
                the basic mechanics of a Pokemon game. Achieved full score.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
