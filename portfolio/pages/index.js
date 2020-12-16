import HomeSection from "../components/HomeSection";
import { motion } from 'framer-motion';
import { pageAnim } from '../animation';

const Home = props => (
  <motion.div 
    variants={pageAnim} 
    initial="hidden" 
    animate="show"
    exit="exit"
  >
    <div className="layout">
    <HomeSection />
    </div>
  </motion.div>
);

export default Home;
