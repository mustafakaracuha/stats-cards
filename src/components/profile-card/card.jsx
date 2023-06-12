import profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";

export default function card() {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        x: [300, 0],
        transition: { duration: 0.5, delay: 0.7 },
      }}
      className="w-[342px] h-[405px] rounded-[20px] bg-white absolute text-center -right-4 top-40 shadow-2xl shadow-[#163F78] flex-col items-start justify-center p-12"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, delay: 0.9 },
          }}
          className="w-[128px] h-[128px] bg-white rounded-full border-[10px] border-[#D8E6FA] flex items-center justify-center bg-cover overflow-hidden"
        >
          <motion.img
            animate={{
              opacity: [0, 1],
              scale: [2, 1],
              transition: { duration: 0.5, delay: 1.8 },
            }}
            src={profile}
            className="scale-125"
          />
          <motion.span
            animate={{
              opacity: [0, 1],
              scale: [2, 1],
              transition: { duration: 0.5, delay: 2 },
            }}
            className="w-[50px] h-[32px] bg-[#294266] flex items-center justify-center rounded-[20px] absolute top-24 mt-2 text-white"
          >
            PRO
          </motion.span>
        </motion.div>
      </div>
      <motion.p
        animate={{
          opacity: [0, 1],
          y: [50, 0],
          transition: { duration: 0.5, delay: 1.2 },
        }}
        className="text-center text-[22px] text-[#456392] mt-5"
      >
        Mustafa Karaçuha
      </motion.p>
      <motion.a
        animate={{
          opacity: [0, 1],
          y: [50, 0],
          transition: { duration: 0.5, delay: 1.4 },
        }}
        className="text-center text-[16px] font-light text-[#456392] mt-3 cursor-pointer"
        target="_blank"
        href="https://www.linkedin.com/in/mustafakaracuha/"
      >
        @mustafakaracuha
      </motion.a>
      <motion.p
        animate={{
          opacity: [0, 1],
          y: [50, 0],
          transition: { duration: 0.5, delay: 1.6 },
        }}
        className="text-center text-[16px] mt-20"
      >
        7.5 K followers ・ 500+ following
      </motion.p>
    </motion.div>
  );
}
