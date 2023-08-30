import React, { useState } from 'react';


function Question6(){
  const [currentMenu, setCurrentMenu] = useState(null);

  const toggleMenu = (index) => {
    setCurrentMenu(index);
  };

  return (
    <div className='main'>
    <div className="nav-menu_container">
      <div className="navbar">
        <Option onClick={() => toggleMenu(0)}>Recent</Option>
        <Option onClick={() => toggleMenu(1)}>Popular</Option>
        <Option onClick={() => toggleMenu(2)}>Trending</Option>
      </div>
      <div className="menu-container">
        <Menu index={0} currentMenu={currentMenu}>
          <Blog
            title="Does drinking coffee make you smarter?"
            details="5h Ago . 5 comments . 2 shares"
          />
          <Blog
            title="So you've bought coffee... now what?"
            details="2h ago . 3 comments . 2 shares"
          />
        </Menu>
        <Menu index={1} currentMenu={currentMenu}>
          <Blog
            title="Is tech making coffee better or worse?"
            details="Jan 7 . 29 comments . 16 shares"
          />
          <Blog
            title="The most innovative things happening in coffee"
            details="Mar 19 . 24 comments . 13 shares"
          />
        </Menu>
        <Menu index={2} currentMenu={currentMenu}>
          <Blog
            title="Ask me anything: 10 answers to your questions about coffee"
            details="2d ago . 9 comments . 5 shares"
          />
          <Blog
            title="The worst advice we've ever heard about coffee"
            details="4d ago . 1 comment . 2 shares"
          />
        </Menu>
      </div>
    </div>
    </div>
  );
}

function Option({ onClick, children }) {
  return (
    <div className="option" onClick={onClick}>
      {children}
    </div>
  );
}

function Menu({ index, currentMenu, children }) {
  const isActive = index === currentMenu;
  return <div className={`menu ${isActive ? 'active' : ''}`}>{children}</div>;
}

function Blog({ title, details }) {
  return (
    <div className="blog">
      <div className="title">{title}</div>
      <div className="details">{details}</div>
    </div>
  );
}

export default Question6;