import React from "react";
import { Link } from "react-router-dom";
import '../Header/style.scss';
const Header = () => {
  return (
    <header className="header-container">
      <div className="container">
        <div className="navigate">
          <Link to={"/Home"} className='link'>Home</Link>
        </div>
        <div className="navigate">
          <Link to={"/AddTask"} className='link'>Add Task</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
