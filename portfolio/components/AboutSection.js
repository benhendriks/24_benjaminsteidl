import Toggle from "./Toggle";

const AboutSection = () => {
  return (
    <div className="faq">
      <h2>My <span>CV</span></h2>
      <Toggle title='About'>
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eos?</p>
          </div>
        </div>
      </Toggle>
      <Toggle title='Experience'>
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eos?</p>
          </div>
        </div>
      </Toggle>
      <Toggle title='Endjucation'>
        <div className="question">
          <h4></h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eos?</p>
          </div>
        </div>
      </Toggle>
      <Toggle title='Skills'>
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eos?</p>
          </div>
        </div>
      </Toggle>
    </div>
  );
};

export default AboutSection;