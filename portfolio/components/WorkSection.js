import { motion } from "framer-motion"
import Link from 'next/link';
import { photoAnim } from "../animation";
import { FaGithub } from 'react-icons/fa';


const WorkSection = () => {
  return (
    <div className="work">
      <div className="project">
        <div className="project-title">
          <Link href="https://date-fox.herokuapp.com/" >
            <a target="blank"><h2>Date Fox</h2></a>
          </Link>
          <Link href="https://github.com/zcallanan/rails-date-fox" >
            <a target="blank"><FaGithub /></a>
          </Link>
        </div>
        <div className="line"></div>
        <img
          className="project-img" 
          variants={photoAnim}
          src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607675808/benjaminsteidl.com/Date_Fox/date_fox_home_nvhskb.png" 
          layout="fixed" 
          width={500} 
          height={500} 
          alt="Benjamin Steidl" 
        />
      </div>
      <div className="project">
        <div className="project-title">
          <Link href="https://garden-fox.herokuapp.com/" >
            <a target="blank"><h2>Garden Fox</h2></a>
          </Link>
          <Link href="https://github.com/zcallanan/rails-garden-fox" >
            <a target="blank"><FaGithub /></a>
          </Link>
        </div>
        <div className="line"></div>
        <img
          className="project-img" 
          src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607676674/benjaminsteidl.com/Garden_Fox/garden_fox_search_iwomsm.png" 
          layout="fixed" 
          width={500} 
          height={500} 
          alt="Benjamin Steidl" 
        />
      </div>
      <div className="project">
        <div className="project-title">
          <Link href="https://happy-torvalds-54c393.netlify.app/" >
            <a target="blank"><h2>Slick Slices</h2></a>
          </Link>
          <Link href="https://github.com/benhendriks/21_slick-slices_hosting" >
            <a target="blank"><FaGithub /></a>
          </Link>
        </div>
        <div className="line"></div>
        <img
          className="project-img" 
          src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607676261/benjaminsteidl.com/Slick_Slices/slick_slices_hot_now_ycsevo.png" 
          layout="fixed" 
          width={500} 
          height={500} 
          alt="Benjamin Steidl" 
        />
      </div>
      <div className="project">
        <div className="project-title">
          <Link href="https://sick-fits-next-pro.herokuapp.com/" >
            <a target="blank"><h2>Sick Fits</h2></a>
          </Link>
          <Link href="https://github.com/benhendriks/19_advanced_react_graphql" >
            <a target="blank"><FaGithub /></a>
          </Link>
        </div>
        <div className="line"></div>
        <img
          className="project-img" 
          src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607682511/benjaminsteidl.com/Sick_Fits/sick_fits_log_n6h2tg.png" 
          layout="fixed" 
          width={500} 
          height={500} 
          alt="Benjamin Steidl" 
        />
      </div>
      <div className="project">
        <div className="project-title">
          <Link href="http://loarpo.com/" >
            <a target="blank"><h2>Ignite</h2></a>
          </Link>
          <Link href="https://github.com/benhendriks/25_ignite" >
            <a target="blank"><FaGithub /></a>
          </Link>
        </div>
        <div className="line"></div>
        <img
          className="project-img" 
          src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607707497/benjaminsteidl.com/Games/games_view_y9c1kt.png" 
          layout="fixed" 
          width={500} 
          height={500} 
          alt="Benjamin Steidl" 
        />
      </div>
      <div className="project">
        <div className="project-title">
          <Link href="https://github.com/benhendriks/22_music_player" >
            <a target="blank"><h2>Music Player</h2></a>
          </Link>
          <Link href="https://github.com/benhendriks/22_music_player" >
            <a target="blank"><FaGithub /></a>
          </Link>
        </div>
        <div className="line"></div>
        <img
          className="project-img" 
          src="https://res.cloudinary.com/daf8fgekl/image/upload/v1607682493/benjaminsteidl.com/Music_Player/player_qeayfm.png" 
          layout="fixed" 
          width={500} 
          height={500} 
          alt="Benjamin Steidl" 
        />
      </div>
    </div>
  );
};

export default WorkSection;