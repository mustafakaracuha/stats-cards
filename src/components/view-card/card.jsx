import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import model1 from "../../assets/group-avatar/1.jpg";
import model2 from "../../assets/group-avatar/2.jpg";
import model3 from "../../assets/group-avatar/3.jpg";
import model4 from "../../assets/group-avatar/4.jpg";
import model5 from "../../assets/group-avatar/5.jpg";

import { HiEye } from "react-icons/hi";
import { motion } from "framer-motion";

export default function card() {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        y: [200, 0],
        transition: { duration: 0.5, delay: 1 },
      }}
      className="w-[548px] h-[149px] rounded-[20px] bg-white absolute -left-44 bottom-14 shadow-2xl shadow-[#163F78] flex items-center justify-between pl-10 pr-7"
    >
      <div className="flex items-center">
        <motion.span
          animate={{
            opacity: [0, 1],
            y: [40, 0],
            transition: { duration: 0.5, delay: 1.2 },
          }}
        >
          <HiEye size={50} className="text-[#2C3E50]" />
        </motion.span>
        <motion.p
          animate={{
            opacity: [0, 1],
            y: [40, 0],
            transition: { duration: 0.5, delay: 1.4 },
          }}
          className="font-bold text-[28px] text-[#456392] ml-4"
        >
          213
        </motion.p>
      </div>
      <motion.span
        animate={{
          opacity: [0, 1],
          y: [40, 0],
          transition: { duration: 0.5, delay: 1.6 },
        }}
      >
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={model1} />
          <Avatar alt="Remy Sharp" src={model2} />
          <Avatar alt="Remy Sharp" src={model4} />
          <Avatar alt="Remy Sharp" src={model3} />
          <Avatar alt="Remy Sharp" src={model5} />
        </AvatarGroup>
      </motion.span>
    </motion.div>
  );
}
