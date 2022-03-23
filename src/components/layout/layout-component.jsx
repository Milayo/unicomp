import React from 'react';
import Header from '../header/header';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="content">{props.children}</div>
    </div>
  );
}

export default Layout;