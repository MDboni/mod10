import { motion } from "motion/react"
import team1  from "../assets/img/team1.jpg"
import team2 from "../assets/img/ream2.jpg"
import { useEffect, useState } from "react"

const HeroSection = () => {
    
      const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsMd(mediaQuery.matches);

    const handler = () => setIsMd(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1 text-center justify-items-center hidden lg:block">
                    <motion.img
                    src={team1}
                     animate={{  y: [30, 60, 30] }}
                     transition={{duration: 8,repeat: Infinity,ease: "easeInOut", delay: 1
                    }}
                    className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] border-l-5 border-b-5 border-blue-500  rounded-lg shadow-2xl"
                    />
                    <motion.img
                    src={team2}
                     animate={{  x: [100, 150, 100] }}
                     transition={{duration: 8,repeat: Infinity,ease: "easeInOut", delay: 5
                    }}
                    className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] border-l-5 border-b-5 border-blue-500  rounded-lg shadow-2xl"
                    />
                </div>
                <motion.div className="flex-1 " animate={{ x: isMd ? 50 : 0 }} transition={{ duration: 4  }}>
                    <motion.h1   className="text-5xl font-bold" transition={{ repeat:Infinity }}>
                        The <motion.span 
                        animate={{color:['#ff3d3d','#6abaa2','#3b63f5']}}
                        > Easiest Wayo </motion.span>  <br /> Get Your New Job</motion.h1>
                    <p className="py-6 animate={{x:50}} transition={{ duration: 1 }}">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection