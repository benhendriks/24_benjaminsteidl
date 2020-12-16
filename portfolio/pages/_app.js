import App from 'next/app';
import Page from '../components/Page';
import style from '../styles/style.css';

class MyApp extends App{ 
  render() {
    const { Component } = this.props;
    return (
      <Page>
        <Component />
      </Page>
    );
  }
}

export default MyApp
