import AboutSection from "../components/AboutSection";
import { motion } from 'framer-motion';
import { pageAnim } from '../animation';

const About = props => (
  <motion.div 
    variants={pageAnim} 
    initial="hidden" 
    animate="show"
    exit="exit" 
  >
    <AboutSection />
  </motion.div>
);

export default About;
