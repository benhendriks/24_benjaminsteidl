import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import Router from 'next/router';
 
const Logo = styled.div`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  a {
    padding: 0.5 1rem;
    background: ${props => props.theme.gold};
    color: ${props => props.theme.white};
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
  display: grid;
  justify-content: space-between;
  align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;    
    } 
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>
            Benjamin
            <img src="" alt=""/>
          </a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
)

export default Header;