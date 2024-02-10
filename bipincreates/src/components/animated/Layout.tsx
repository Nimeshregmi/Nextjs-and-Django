
import {motion} from 'framer-motion'
interface Props{
    children:JSX.Element[];
    className?:string;
}

const Layout = ({className="",children}:Props) => {
  return (
    <motion.div
    initial={{y:60,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    className={`${className} text-dark`}>
      {children}
    </motion.div>
  )
}

export default Layout
