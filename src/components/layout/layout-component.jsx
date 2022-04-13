import React from 'react';
import Header from '../header/header';
import SidebarComponent from '../sidebar/sidebar';

const Layout = ({children, currentUser, setCurrentUser} ) => {
 
  console.log(currentUser)
  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div style={{ display: "flex" }}>
        {" "}
        <SidebarComponent />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;