import { motion } from 'framer-motion';
import Wave from './Wave';
import { titleAnim, fade, photoAnim } from '../animation';
import Link from 'next/link';

const HomeSection = () => {
  return ( 
    <div className="intro">
      <div className="description">
        <motion.div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>Hi I'm Ben,</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>a <span>Web Developer</span>,</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>based in Bern.</motion.h2>
          </div>
          <motion.p variants={fade}>
            Contact me for any Web Project ideas you have.
          </motion.p>
          <Link href="/contact">
            <a>
              <motion.button variants={fade}>Contact Me</motion.button>
            </a>
          </Link>
        </motion.div>
      </div>
      <div className="image">
        <motion.img 
          variants={photoAnim}
          src="/profile.png" 
          layout="fixed" 
          width={600} 
          height={600} 
          alt="Benjamin Steidl" 
        />
      </div>
      <Wave />
    </div>
  );
};

export default HomeSection;