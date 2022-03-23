import React from 'react';
import Header from '../header/header';
import SidebarComponent from '../sidebar/sidebar';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <SidebarComponent/>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Layout;