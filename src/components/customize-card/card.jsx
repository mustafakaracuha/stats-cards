import { motion } from "framer-motion";

import store from "../../assets/store.svg";
import warning from "../../assets/warning.svg";

export default function card() {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        x: [-300, 0],
        transition: { duration: 0.5, delay: 0.5 },
      }}
      className="w-[422px] h-[407px] rounded-[20px] bg-white absolute -left-12 top-14 shadow-2xl shadow-[#163F78] p-10"
    >
      <motion.div
        animate={{
          opacity: [0, 1],
          y: [200, 0],
          transition: { duration: 0.5, delay: 0.7 },
        }}
        className="flex items-center"
      >
        <div className="w-[98px] h-[98px] bg-white rounded-full border-[10px] border-[#D8E6FA] flex items-center justify-center">
          <motion.img
            animate={{
              opacity: [0, 1],
              scale: [1.5, 1],
              transition: { duration: 0.5, delay: 1.3 },
            }}
            src={store}
          />
        </div>
        <div className="ml-4">
          <motion.p
            animate={{
              opacity: [0, 1],
              x: [100, 0],
              transition: { duration: 0.5, delay: 1.7 },
            }}
            className="text-[16px] text-[#456392] "
          >
            App running・last 7 days
          </motion.p>
          <motion.p
            animate={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.5, delay: 1.9 },
            }}
            className="font-bold text-[28px] text-[#456392] "
          >
            78
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          y: [300, 0],
          transition: { duration: 0.5, delay: 0.9 },
        }}
        className="flex items-center mt-10"
      >
        <div className="w-[98px] h-[98px] bg-white rounded-full border-[10px] border-[#D8E6FA] flex items-center justify-center">
          <motion.img
            animate={{
              opacity: [0, 1],
              scale: [1.5, 1],
              transition: { duration: 0.5, delay: 1.5 },
            }}
            src={warning}
          />
        </div>
        <div className="ml-4">
          <motion.p
            animate={{
              opacity: [0, 1],
              x: [100, 0],
              transition: { duration: 0.5, delay: 2.1 },
            }}
            className="text-[16px] text-[#456392]"
          >
            Errors・past 24 hours
          </motion.p>
          <motion.p
            animate={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.5, delay: 2.3 },
            }}
            className="font-bold text-[28px] text-[#456392]"
          >
            32
          </motion.p>
        </div>
      </motion.div>
      <motion.button
        animate={{
          opacity: [0, 1],
          y: [50, 0],
          transition: { duration: 0.5, delay: 1.2 },
        }}
        className="w-[342px] h-[61px] bg-[#294266] rounded-[10px] text-[18px] text-white mt-8"
      >
        CUSTOMIZE
      </motion.button>
    </motion.div>
  );
}
