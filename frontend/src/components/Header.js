import {Fragment, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/topbar_logo.png";


const Header=(props)=>{
const [LoggedInView, LoggedOutView]=useState({})

  return (
    <Fragment>
    <nav
    className="navbar navbar-expand-md navbar-dark"
    style={{ padding: "0.5rem 2rem" }}
  >
    <Link to="/" className="navbar-brand">
      <img alt="logo" src={logo} />
    </Link>

    {props.currentUser ? (
      <LoggedInView currentUser={props.currentUser} />
    ) : (
      <LoggedOutView currentUser={props.currentUser} />
    )}
  </nav>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Sign in
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Sign up
        </Link>
      </li>
    </ul>
  );
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/editor" className="nav-link">
          <i className="ion-compose"></i>&nbsp;New Item
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/settings" className="nav-link">
          <i className="ion-gear-a"></i>&nbsp;Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`/@${props.currentUser.username}`} className="nav-link">
          <img
            src={props.currentUser.image}
            className="user-pic pr-1"
            alt={props.currentUser.username}
          />
          {props.currentUser.username}
        </Link>
      </li>
    </ul>
    </Fragment>
)}
export default Header;
