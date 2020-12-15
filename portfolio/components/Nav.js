import Link from 'next/link';
import NavStyles from './NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/work">
      <a>Work</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </NavStyles>
)

export default Nav;