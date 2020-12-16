import App from 'next/app';
import Page from '../components/Page';
import style from '../styles/style.css';
import { AnimatePresence } from 'framer-motion';

class MyApp extends App{ 
  render() {
    const { Component, pageProps, router } = this.props;
    
    return (
      <AnimatePresence exitBeforeEnter>
        <Page>
          <Component {...pageProps} key={router.route} />
        </Page>
      </AnimatePresence>
    );
  }
}

export default MyApp;
