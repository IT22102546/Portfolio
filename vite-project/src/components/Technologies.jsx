import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiPhp, SiHtml5, SiJavascript, SiFirebase, SiKotlin, SiTailwindcss, SiBootstrap, SiMysql } from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";
import {motion} from "framer-motion"

const iconVarients = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10 , -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"

        }
    }
})

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
       whileInView={{opacity:1 , y:0}}
       initial={{opacity:0 , y:-100}}
       transition={{duration:1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1 , x:0}}
      initial={{opacity:0 , x:-100}}
      transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
         variants={iconVarients(2.5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiReactjsLine className="text-7xl" style={{ color: "#61DAFB" }} />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <TbBrandNextjs className="text-7xl"  />
        </motion.div>
        <motion.div
        variants={iconVarients(2)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiMongodb className="text-7xl" style={{ color: "#47A248" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiExpress className="text-7xl" />
        </motion.div>
        <motion.div
        variants={iconVarients(3)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaNodeJs className="text-7xl" style={{ color: "#339933" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(6)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiFirebase className="text-7xl" style={{ color: "#FFCA28" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(4)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiKotlin className="text-7xl" style={{ color: "#0095D5" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(7)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaJava className="text-7xl" style={{ color: "#007396" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiPhp className="text-7xl" style={{ color: "#777BB4" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(8)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiHtml5 className="text-7xl" style={{ color: "#E34F26" }} />
        </motion.div>
        <motion.div variants={iconVarients(6)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiJavascript className="text-7xl" style={{ color: "#F7DF1E" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(9)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiTailwindcss className="text-7xl" style={{ color: "#38B2AC" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(7)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiBootstrap className="text-7xl" style={{ color: "#7952B3" }} />
        </motion.div>
        <motion.div
        variants={iconVarients(10)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiMysql className="text-7xl" style={{ color: "#4479A1" }} />
        </motion.div>
      </motion.div>
    </div>
  );
}
