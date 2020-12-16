import Logo from 'next/image';

const HomeSection = () => (
  <div className="intro">
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>Hi I'm Ben,</h2>
        </div>
        <div className="hide">
          <h2>a <span>Web Developer,</span></h2>
        </div>
        <div className="hide">
          <h2>based in Bern.</h2>
        </div>
        <p>
          Contact me for any Web Project ideas you have.
        </p>
        <button>Contact Me</button>
      </div>
    </div>
    <div className="image">
      <img 
        src="/profile.png" 
        layout="fixed" 
        width={500} 
        height={500} 
        alt="Benjamin Steidl" 
      />
    </div>
  </div>
)

export default HomeSection;