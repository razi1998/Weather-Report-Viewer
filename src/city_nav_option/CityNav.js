import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const CityNav = (props) => {
    const { component } = props
    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid-one">
                    <ul className="nav navbar-nav navbar-light ">
                        <li ><Link to={`/${component}/india`}>New Delhi, India</Link></li>
                        <li ><Link to={`/${component}/uk`}>London, UK</Link></li>
                        <li ><Link to={`/${component}/china`}>Beijing, China</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default CityNav
//<li ><Link to={`/${component}/japan`}>Tokyo, Japan</Link></li>