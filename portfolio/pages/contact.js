import { motion } from 'framer-motion';
import { pageAnim } from '../animation';

const Contact = props => (
  <motion.div 
    variants={pageAnim} 
    initial="hidden" 
    animate="show"
    exit="exit" 
  >
    <p>Contact</p>
  </motion.div>
);

export default Contact;
