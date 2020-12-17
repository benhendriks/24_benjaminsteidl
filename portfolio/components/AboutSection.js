import Toggle from "./Toggle";
import { FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <div className="faq">
      <h2>My <span>CV</span></h2>
      <Toggle title='About'>
        <div className="answer">
          <p>Originally form Munich and now living in Bern. Where I learned programming in a coding bootcamp with Le Wagon 2020.</p>
        </div>
      </Toggle>
      <Toggle title='Experience'>
        <div className="answer">
          <p>I worked in sales, customer support, purchasing and logistics.</p>
          <p>FC Bayern 2013 until 2020</p>
          <p>Hornbach 2004 until 2012</p>
          <p>FC Bayern 2000 until 2004</p>
        </div>
      </Toggle>
      <Toggle title='Endjucation'>
        <div className="answer">
          <p>Le Wagon Coding Bootcamp as Full Stack Developer</p>
          <p>Usability Academy as Userbility & UX Expert</p>
          <p>IHK Oberbayern as Online Marketing Manager</p>
        </div>
      </Toggle>
      <Toggle title='Skills'>
        <div className="answer">
          <p>HTML & CSS, Javascript ES6, Ruby on Rails, React.js, Git & Github, Next.js, Gatsby, Typescript, Postgres SQL</p>
        </div>
      </Toggle>
    </div>
  );
};

export default AboutSection;