'use client'
import {motion } from "framer-motion"

const Void = () => {


    return (
        <div className="">
        {/* <div className=" h-[20px] w-[20px] bg-red-500"  ></div> */}
        <motion.div className=" h-[100px] w-[100px]  bg-red-500" initial={{x : -200}} animate={{x:400 , rotate : 20}} transition={{  duration: 1 }} ></motion.div>
        <textarea name="fef" id="jhbafbd" />
        {/* <motion.div className=" h-[100px] w-[100px]  bg-red-500" initial={{x : -200}} animate={{x:400 ,  rotate : 20}} transition={{ delay : 2 , duration: 1 }} ></motion.div> */}
    </div>
     );
}
  
export default Void; 