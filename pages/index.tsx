import { faBars, faHamburger, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clearInterval } from "timers";
import MainLayout from "../components/layout/main";
import DesktopMenu from "../components/navigation/desktop-menu";


const HomePage = () => {
    const [isLoading, setLoading] = useState<boolean>(true)
    const [progress, setProgress] = useState(5);

  let progressTimer;

  function handleTime() {
    setProgress((prevState) => prevState -1);
  }

  useEffect(() => {
    
    if (progress <= 0) {clearInterval(progressTimer)
    setLoading(false)};
  }, [progress]);

  useEffect(() => {
    
    progressTimer = setInterval(handleTime, 1000);

    return () => clearInterval(progressTimer);
  }, []);

    const variants = {
        loading: { opacity: ["100%", "0%", "100%", "0%", "100%"] },
        loaded: { height: ["100%", "75%", "50%", "25%", "0%"], opacity: ["100%", "75%", "50%", "25%", "0%"] }
    }

    return (

        <MainLayout>
            <AnimatePresence>
                {isLoading &&
                    (<motion.div key={'modal'} onClick={() => setLoading(!isLoading)} className="bg-yellow-400 left-0 flex flex-col h-screen z-50 w-0 fixed" initial={{ width: '100%', scale: 0 }} exit={variants.loaded} animate={{ width: "100%", scale: 1 }} >
                        <motion.div className="relative mx-auto my-auto" exit={{ opacity: 0 }} ><div className="text-center  text-2xl">Hello Human</div><div className="text-xs text-center">Ready ({progress}s)</div>
                        <div className="absolute h-full w-full lg:bottom-0 transform translate-y-1/2">
                        <div className="relative w-full h-full lg:h-full lg:w-full">
                        <Image
                            src={'/astro.png'}
                            layout='responsive'
                            width={530}
                            height={624}
                            alt=''
                        />
                    </div></div>
                        </motion.div>
                    </motion.div>)

                }
            </AnimatePresence>
            <DesktopMenu />
            <nav className="bg-transparent grid grid-cols-3 lg:grid-cols-6 px-0 py-4 border-b-2 border-black">
                <div className="relative">
                    <Image
                        src={'/logo.png'}
                        layout='responsive'
                        width={470}
                        height={137}
                        alt=''
                    />
                </div>
            </nav>
            <section className="relative py-16 flex flex-col-reverse lg:flex-row">
                <div className="bg-black h-64 w-64 rounded-full  absolute blur-[150px] right-12 top-12"></div>
                <div className="w-full lg:w-1/2">
                    <div className="my-2 text-sm">ADELEKE OLUWATOBI</div>
                    <div className="my-2 text-2xl  lg:text-4xl">SOFTWARE AND UI ENGINEER FROM EARTH</div>
                    <div className="my-2">I am a Fullstack Software Engineer with years of experience architecting, designing and building solutions.</div>
                    <div className="text-center bg-black text-white mt-4 cursor-pointer hover:bg-gray-800 w-fit px-4 py-4">LET&apos;S TALK</div>
                </div>
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <div className="relative w-full h-full lg:h-full lg:w-1/2 mx-auto my-auto">
                        <Image
                            src={'/kage.png'}
                            layout='responsive'
                            width={452}
                            height={460}
                            alt=''
                        />
                    </div>
                </div>
            </section>
            <section id="skills" className="lg:flex my-8  border-y-2 border-black">
                <div className="lg:w-2/3 lg:border-0 border-r-2 border-black pr-2 lg:pr-4 py-8">
                    <div className="my-2 text-gray-500 text-sm ">SKILLS</div>
                    <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-3">
                        <div>FRONTEND DEV</div>
                        <div>BACKEND DEV</div>
                        <div>UI ENGINEER</div>
                        <div>API DEVELOPMENT</div>
                        <div>WEB3 DEV</div>
                        <div>TECHNICAL WRITER</div>
                    </div>
                </div>
                <div className="w-1/3 border-l-2 border-black pl-2 lg:pl-4 py-8">
                    <div className="my-2 text-gray-500 text-sm ">CONNECT</div>
                    <div className="grid  gap-4 lg:grid-cols-1 lg:grid-rows-3">
                        <div className="hover:underline cursor-pointer">TWITTER</div>
                        <div className="hover:underline cursor-pointer">HASHNODE</div>
                        <div className="hover:underline cursor-pointer">NEWSLETTER</div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="my-8 border-b-2 border-black py-4">
                <div className="text-3xl ">PORTFOLIO</div>
                <div className="text-gray-500">A list of my recent works and projects.</div>
            </section>
            <section className="lg:flex my-16">
                <div className="w-full lg:pr-2 lg:w-1/2">
                    <div className="relative w-full h-full lg:h-full lg:w-full">
                        <Image
                            src={'/notics.png'}
                            layout='responsive'
                            width={1367}
                            height={632}
                            alt=''
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-2" >
                    <div className="text-gray-500 text-sm underline my-4">
                        NOTICS
                    </div>
                    <div className=" lg:text-2xl my-2">PRODUCTIVITY</div>
                    <div className="my-4 text-gray-500">Notics is the business tool for collecting and processing feedbacks using industry grade AI assistants.
                    </div>
                </div>
            </section>

            <section className="lg:flex flex-row-reverse my-16">
                <div className="w-full lg:pr-2 lg:w-1/2">
                    <div className="relative w-full h-full lg:h-full lg:w-full">
                        <Image
                            src={'/learnali.png'}
                            layout='responsive'
                            width={1367}
                            height={632}
                            alt=''
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-2" >
                    <div className="text-gray-500 text-sm underline my-4">
                        LEARNALI
                    </div>
                    <div className=" lg:text-2xl my-2">EDTECH/LMS</div>
                    <div className="my-4 text-gray-500">Acquire the skill you need to land your dream Job with world class training and career path programs from top organisations.</div>
                </div>
            </section>

            <section className="lg:flex my-16">
                <div className="w-full lg:pr-2 lg:w-1/2">
                    <div className="relative w-full h-full lg:h-full lg:w-full">
                        <Image
                            src={'/cstory.png'}
                            layout='responsive'
                            width={1367}
                            height={632}
                            alt=''
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-2" >
                    <div className="text-gray-500 text-sm underline my-4">
                        CSTORY
                    </div>
                    <div className="lg:text-2xl my-2">COMMUINITY</div>
                    <div className="my-4 text-gray-500">A personal space for you to start blogging, reading and building community.</div>
                </div>
            </section>

            <section className="lg:flex flex-row-reverse my-16">
                <div className="w-full lg:pr-2 lg:w-1/2">
                    <div className="relative w-full h-full lg:h-full lg:w-full">
                        <Image
                            src={'/finva.png'}
                            layout='responsive'
                            width={1367}
                            height={632}
                            alt=''
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-2" >
                    <div className="text-gray-500 text-sm underline my-4">
                        FINVA
                    </div>
                    <div className=" lg:text-2xll my-2">FINANCE/ANALYTICS</div>
                    <div className="my-4 text-gray-500">An online financial analytics and bank transaction tracker from the comfort of your device</div>
                </div>
            </section>

            <section className="lg:flex flex-row my-16">
                <div className="w-full lg:pr-2 lg:w-1/2">
                    <div className="relative w-full h-full lg:h-full lg:w-full">
                        <Image
                            src={'/bank.jpg'}
                            layout='responsive'
                            width={1367}
                            height={632}
                            alt=''
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-2" >
                    <div className="text-gray-500 text-sm underline my-4">
                        BANKO
                    </div>
                    <div className=" lg:text-2xl my-2">API/MOBILE BANK</div>
                    <div className="my-4 text-gray-500">A digital bank API enabling virtual process that includes online banking and beyond.</div>
                </div>
            </section>


            <section id="stack" className="mt-8  border-y-2 border-black py-8">
                <div className="text-3xl ">STACKS</div>
                <div className="text-gray-500">A list of tooling and languages i use for hacking.</div>
            </section>
            <section id="skills" className="lg:flex mb-8  border-b-2 border-black">
                <div className="lg:w-full lg:border-0 border-r-2 border-black pr-2 lg:pr-4 py-8">
                    <div className="grid gap-4 lg:grid-cols-3 ">
                        <div>JAVASCRIPT</div>
                        <div>PYTHON</div>
                        <div>TYPESCRIPT</div>
                        <div>REACT JS</div>
                        <div>NEXT JS</div>
                        <div>NEST JS</div>
                        <div>PYTORCH</div>
                        <div>RUST</div>
                        <div>FLASK</div>
                        <div>TAILWIND CSS</div>
                        <div>POSTGRESQL</div>
                        <div>MONGODB</div>
                    </div>
                </div>
                
            </section>
            <section id="stack" className="mt-8 text-gray-300  border-y-2 border-black py-8">
            &copy;Adeleke Oluwatobi
            </section>

        </MainLayout>
    )
}

export default HomePage;