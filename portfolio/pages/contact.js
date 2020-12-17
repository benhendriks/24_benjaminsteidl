import { motion } from 'framer-motion';
import { pageAnim } from '../animation';

const Contact = props => (
  <motion.div 
    variants={pageAnim} 
    initial="hidden" 
    animate="show"
    exit="exit" 
  >
    <div className="contact">
      <h2>Benjamin Steidl</h2>
      <h2>info@benjaminsteidl.com</h2>
      <h2>+41 767 342 899</h2>
    </div>
  </motion.div>
);

export default Contact;
