import { motion } from 'framer-motion';
import { pageAnim } from '../animation';

const Work = props => (
  <motion.div 
    variants={pageAnim} 
    initial="hidden" 
    animate="show"
    exit="exit" 
  >
    <p>Work</p>
  </motion.div>
);

export default Work;
