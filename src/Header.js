import React from 'react'
import './App.css';
import CityNav from './city_nav_option/CityNav';
const Header = (props) => {
    const { component = '5days', country = 'india' } = props
    return (
        <div>
            <CityNav component={component} country={country} />
            <div>
                <h1 className="header">
                    Weather <span className="header2"> Report </span>
                </h1>
            </div>
        </div>
    )
} 

export default Header
