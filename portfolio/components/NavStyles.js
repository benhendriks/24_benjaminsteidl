import styled from "styled-components";

const NavStyles = styled.ul`
  min-height: 10vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: ${props => props.theme.white};
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2.5rem;
    font-family: "Lobster",cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative: 
  }
  @media (max-width: 1300px) {
      flex-direction: column;
      padding: 3rem 1rem;
      #logo {
        display: inline-block;
        margin: 1rem;
      }
      ul {
        padding: 2rem;
        justify-content: space-around;
        width: 100%;
        li {
          padding: 0;
        }
      }
    }
`;


export default NavStyles;