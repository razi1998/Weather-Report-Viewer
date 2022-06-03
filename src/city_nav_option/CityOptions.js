import React from 'react'
import {Link} from 'react-router-dom'
import './CityOptions.css'

const CityOptions = () => {
    return (
        <div className="main">
            <h1 className="header">
                Weather <span className="header2"> Report </span>
            </h1>

            <div className="grid">
                <Link to="/5days/india" className="card">
                    <h1>INDIA </h1>
                    <h2>New Delhi</h2>
                </Link>

                <Link to="5days/uk" className="card">
                    <h1>UK </h1>
                    <h2>London</h2>
                </Link>

                <Link to="/5days/china"  className="card">
                    <h1>CHINA </h1>
                    <h2>Beijing</h2>
                </Link>

               
            </div>
        </div>
    )
}

export default CityOptions
 /*
  <Link to="/5days/japan" className="card">
                    <h1>JAPAN </h1>
                    <h2>Tokyo</h2>
                </Link>*/