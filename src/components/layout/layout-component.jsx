import React from 'react';
import Header from '../header/header';
import SidebarComponent from '../sidebar/sidebar';

const Layout = (props, { currentUser }) => {
  console.log(currentUser);
  return (
    <div>
      <Header currentUser={currentUser}/>
      <div style={{display: "flex"}}>
        {" "}
        <SidebarComponent />
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;