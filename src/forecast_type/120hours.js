import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useParams } from "react-router-dom"
import Header from '../Header'
import Footer from '../Footer'

const Onetwozerohours = (props) => {
// console.log(props.country);
    const [state, setState] = useState({
        city_name: '',
        lat: '',
        lon: '',
        data: []
    });

    const { country = '' } = useParams();


    const countryInfoDict = {
        india: { lat: '28.6448', lon: '77.216721' },
        china: { lat: '39.9042', lon: '116.4074' },
        uk: { lat: '51.5142', lon: '-0.0933' },
        japan: { lat: '35.68', lon: '139.75' }
    }

    useEffect(() => {

        var options = {
            method: 'GET',
            url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly',
            params: { lat: countryInfoDict[props.country].lat, lon: countryInfoDict[props.country].lon },
            headers: {
                'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
                'x-rapidapi-key':'162a744309msh5ead9b2ce50dedap16ec7cjsn540af45d2436'
            }
        };

        axios.request(options).then(function (res) {
            setState({
                ...state,
                city_name: res.data.city_name,
                lat: res.data.lat,
                lon: res.data.lon,
                data: res.data.data,
            })
            // console.log(state.city_name, state.lat, state.lon, state.data)
        }).catch(function (error) {
            console.error(error);
        });

    }, [props.country])



    // console.log(state);
    return (
        <div className="App">

            <Header component="120hrs" country={country} />


            <h4 className="h4">City Name : {state.city_name} &nbsp;&nbsp; Latitude : {state.lat} &nbsp;&nbsp; Longitude : {state.lon}</h4>


            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <td scope="col">DateTime</td>
                        <td scope="col">Temperature</td>
                        <td scope="col">Weather</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        state.data.map(data =>
                            <tr>
                                <td key={state.lat}>{data.timestamp_local}</td>
                                <td >{data.temp}</td>
                                <td >{data.weather.description}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <Footer />
        </div>
    )
}

export default Onetwozerohours;
