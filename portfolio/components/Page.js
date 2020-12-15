import React, { Component } from 'react'
import Header from './Header';
import Meta from './Meta';
import Sidebar from './Sidebar';

class Page extends Component {
  render() {
    return (
      <div className="layout">
        <Meta />
        <Header />
        <Sidebar />
          { this.props.children }
      </div>
    )
  }
}

export default Page;
