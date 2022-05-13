import { faBars, faBell, faBriefcase, faChessKing, faCode, faCog, faHome, faMapLocationDot, faPeopleGroup, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useState } from "react"

const DesktopMenu = () => {
    const route = useRouter()
    const [isOpen, setOpen] = useState<boolean>(false)
    const menuVariant = {
        opening: { width: '14rem', height: '16rem', borderRadius: ['100%', '75%', '50%', '25%', '2%'], display: 'block' },
        closing: { width: '3rem', height: '3rem', borderRadius: ['2%', '25%', '50%', '75%', '100'] },
        hide: { display: 'none', opacity: 0 },
        show: { display: 'grid', opacity: 1 }
    }
    return (
        <div className=" fixed top-2 right-4 lg:right-8 z-40 md:block">
            
            <motion.div variants={menuVariant} animate={isOpen ? 'opening' : 'closing'} className="bg-black flex flex-col px-4 py-4 w-12 h-12 rounded-full">
                {
                    <FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto text-white  text-md" icon={isOpen ? faXmark : faBars} />
                }
                <motion.div variants={menuVariant} animate={isOpen ? 'show' : 'hide'} className="mt-4 hidden grid-cols-1 gap-4">
                    <div onClick={()=>{route.push('/'); setOpen(false)}} className="flex text-white cursor-pointer w-fit hover:text-gray-100 text-lg "><div className="mr-4 w-4 "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faHome} /></div><div>Home</div></div>
                    <div onClick={()=>{route.push('/#skills'); setOpen(false)}} className="flex text-white cursor-pointer w-fit hover:text-gray-100 text-lg "><div className="mr-4 w-4 "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faChessKing} /></div><div>Skills</div></div>
                    <div onClick={()=>{route.push('/#portfolio'); setOpen(false)}} className="flex text-white cursor-pointer w-fit hover:text-gray-100 text-lg "><div className="mr-4 w-4 "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faBriefcase} /></div><div>Portfolio</div></div>
                    <div onClick={()=>{route.push('/#stack'); setOpen(false)}} className="flex text-white cursor-pointer w-fit hover:text-gray-100 text-lg "><div className="mr-4 w-4 "><FontAwesomeIcon onClick={() => setOpen(!isOpen)} className="mx-auto my-auto" icon={faCode} /></div><div>Stack</div></div>
                </motion.div>
            
              </motion.div>
        </div>)
}
export default DesktopMenu