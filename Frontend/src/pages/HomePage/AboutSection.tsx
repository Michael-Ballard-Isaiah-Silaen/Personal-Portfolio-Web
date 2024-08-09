const className = {
  p: "text-justify tracking-wide text-slate-800 text-wrap text-sm px-4 leading-relaxed",
  h3: "text-xl font-bold text-blue-900 leading-relaxed",
};
export const AboutSection = () => {
  return (
    <section
      id="about"
      className="mx-auto flex h-fit w-full max-w-[950px] flex-col items-center justify-center px-4 py-20"
    >
      <h2 className="pb-[30px] text-3xl font-bold tracking-wide text-blue-700">
        About
      </h2>
      <div className="flex w-full flex-col items-start gap-5 px-4 text-slate-800">
        <p className="text-wrap text-justify text-sm leading-relaxed tracking-wide">
          Hello! My name is{" "}
          <strong className="animate-bounce text-xl text-blue-700">
            Michael Ballard Isaiah Silaen
          </strong>
          , and I am an aspiring software engineer and technopreneur. I am
          currently going through my undergraduate studies at the Bandung
          Institute of Technology (ITB), majoring in Information Systems.
        </p>
        <div>
          <h3 className={className.h3}>My Mission and Vision</h3>
          <p className={className.p}>
            My mission is to be the owner and founder of companies that pioneers
            innovation and breakthroughs, disrupting entire industries or even
            creating new ones, to transform them and enhance human life. By
            fostering and maintaining a culture of creativity, collaboration,
            and continuous learning, I aim to constantly improve myself, and
            help in the establishment and development of cutting-edge
            technologies and solutions that addresses challenges. My vision
            encompasses a commitment to excellence, integrity, and a relentless
            pursuit of progress, ensuring that my ventures lead the way in
            shaping a better, more advanced future for all.
          </p>
        </div>
        <div>
          <h3 className={className.h3}>A little bit more about me</h3>
          <p className={className.p}>
            I am born on the 1st of January of 2006 (only a few hours late to
            2005!) in the city of Medan, which is located in the Northern
            Sumatra province. I went to PrimeOneSchool for my elementary and
            junior high school, and I moved to SMAK Penabur Gading Serpong when
            I relocated to Jakarta, where I am part of Brilliant Class Batch 14.
            I am raised as a single child in a household with two amazing
            parents. My paternal grandfather is{" "}
            <a
              href="https://en.wikipedia.org/wiki/Jansen_Ibrahim_Silaen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Jansen Ibrahim Silaen
            </a>
            .
          </p>
        </div>
        <div>
          <h3 className={className.h3}>Contact Me:</h3>
          <div className="flex flex-col gap-3">
            <p className={className.p}>
              For any inquiries, please do contact me. I have my email at
              silaenmichael@gmail.com, and I use Line too (@michael.ballard). I
              am also active on{" "}
              <a
                href="https://www.instagram.com/michael__ballard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Instagram
              </a>
              , and{" "}
              <a
                href="https://www.linkedin.com/in/michael-silaen-8ab023286/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
