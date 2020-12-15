import Link from 'next/link';
import Logo from 'next/image';

const Nav = () => (
  <nav>
    <div>
      <Link href="/">
        <a>
          <Logo 
            src="/logo.png" 
            layout="fixed" 
            width={100} 
            height={100} 
            alt="Benjamin Steidl" 
          />
        </a>
      </Link>
    </div>
    <div className="nav-links">
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </nav>
)

export default Nav;