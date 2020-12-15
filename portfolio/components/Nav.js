import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/work">
      <a>Work</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </nav>
)

export default Nav;