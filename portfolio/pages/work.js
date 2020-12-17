import { motion } from 'framer-motion';
import { pageAnim } from '../animation';
import WorkSection from '../components/WorkSection';

const Work = props => (
  <motion.div 
    variants={pageAnim} 
    initial="hidden" 
    animate="show"
    exit="exit" 
  >
    <WorkSection />
  </motion.div>
);

export default Work;
