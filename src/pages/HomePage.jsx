import Navbar from "../components/Navbar";
import { motion } from "motion/react"
import { FaGithub, FaLinkedin,FaYoutube,FaStackOverflow   } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const HomePage = () => {

  const sentence = {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.06,
        },
      },
    };

    const word = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeOut",
          duration: 0.4,
        },
      },
    };

    const headingText = "Hi, I'm Saurabh Kumar";
    const subheadingText = "A passionate MERN Stack Developer";

  return (
    <>
    <div className="bg-[url('/home-page-image.jpg')] min-h-screen bg-cover text-white ">
    <Navbar/>
    <div className="pt-28 px-8 md:px-20 lg:px-32 font-roboto text-white flex items-center">
    <div>
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold flex flex-wrap"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {headingText.split(" ").map((wordText, index) => (
          <motion.span
            key={index}
            className="mr-2"
            variants={word}
          >
            {wordText === "Saurabh" || wordText === "Kumar" ? (
              <span className="text-white">{wordText}</span>
            ) : (
              wordText
            )}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-xl md:text-2xl my-4 font-Nunito flex flex-wrap"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {subheadingText.split(" ").map((wordText, index) => (
          <motion.span
            key={index}
            className="mr-2"
            variants={word}
          >
            {wordText === "MERN" || wordText === "Developer" ? (
              <span className="text-white">{wordText}</span>
            ) : (
              wordText
            )}
          </motion.span>
        ))}
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-base md:text-lg font-Nunito max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        Turning ideas into real-world web apps with clean code and modern design.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        <Link
          to="/projects"
          className="text-white px-6 py-2 rounded-xl font-Nunito bg-white/10 backdrop-blur-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white/20 hover:shadow-md hover:ring-1 hover:ring-cyan-400"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="text-white px-6 py-2 rounded-xl font-Nunito bg-white/10 backdrop-blur-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white/20 hover:shadow-md hover:ring-1 hover:ring-cyan-400"
        >
          Contact Me
        </Link>
      </motion.div>
        </div>
      </div>
      <motion.div 
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
       initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
      <div className="flex items-center justify-center gap-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
        <a
          href="https://github.com/saurabhkumarxmpt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl transition-all duration-300 hover:px-4 hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/@DesiMERN_9012"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-red-500 transition-all duration-300 hover:px-4"
        >
          <FaYoutube  />
        </a>
        <a
          href="https://www.linkedin.com/in/saurabhkumare/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-blue-400 transition-all duration-300 hover:px-4"
        >
          <FaLinkedin />
        </a>
         <a
          href="https://stackoverflow.com/users/22843437/saurabh-kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-orange-400 transition-all duration-300 hover:px-4 "
        >
          <FaStackOverflow />
        </a>
        <a
          href="mailto:saurabhkumarxmpt@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-blue-400 transition-all duration-300 hover:px-4 "
        >
          <MdOutlineEmail />
        </a>
      </div>
    </motion.div>
    </div>
    </>
  );
};

export default HomePage;
