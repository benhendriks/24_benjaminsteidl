import { motion } from 'framer-motion';
import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import Sidebar from './Sidebar';

class Page extends Component {
  render() {
    return (
      <motion.div className="layout">
        <Meta />
        <Header />
        <Sidebar />
          { this.props.children }
        <Footer />
      </motion.div>
    )
  }
}

export default Page;
