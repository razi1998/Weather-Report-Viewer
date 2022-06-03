import React from "react";
import { Link, useParams } from "react-router-dom";
import "./App.css";
const Nav = () => {
  const { country = "" } = useParams();
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/home" className="navbar-brand">
              {" "}
              Weather <span className="brand-head">Forecast</span>{" "}
            </Link>
          </div>
          <ul className="nav navbar-nav ">
            <li>
              <Link to={`/5days/${country}`}>5 days Forecast</Link>
            </li>
            <li>
              <Link to={`/current/${country}`}>Current Forecast</Link>
            </li>
            <li>
              <Link to={`/hourly/${country}`}>
                Per Minute Forecast (Nowcast)
              </Link>
            </li>
            <li>
              <Link to={`/16days/${country}`}>16 Days Forecast</Link>
            </li>
            <li>
              <Link to={`/120hrs/${country}`}>120 Hours Forecast</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
