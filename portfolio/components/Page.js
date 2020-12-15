import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#000',
  white: '#fdfdfd',
  gold: '#ddbd54',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)',
}; 

const Layout = styled.div`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  background: ${props => props.theme.gold};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Meta />
          <Header />
          <Inner>
            { this.props.children }
          </Inner>
        </Layout>
      </ThemeProvider>
    )
  }
}

export default Page;
