import React from "react";
import "../style/Style.css";
import Baner from "../images/baner.jpeg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="baner">
        <img src={Baner} alt="baner-pic" className="baner-img"></img>
      </div>
      <div className="header">
        <Link to="/">
          <a>Find your Table!</a>
        </Link>
        <Link to="/favourite">
          <a>Favourites</a>
        </Link>
      </div>
    </div>
  );
}
