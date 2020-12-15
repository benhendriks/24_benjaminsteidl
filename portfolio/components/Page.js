import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#000',
  white: '#fdfdfd',
  gold: '#ddbd54',
}; 

const Layout = styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Meta />
          <Header />
            { this.props.children }
        </Layout>
      </ThemeProvider>
    )
  }
}

export default Page;
