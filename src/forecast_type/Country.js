import axios from 'axios';

const countryInfoDict = {
    india: { lat: '28.6448', lon: '77.216721' },
    china: { lat: '39.55', lon: '116.20' },
    uk: { lat: '51.36', lon: '00.05' },
    japan: { lat: '35.68', lon: '139.75' }
}

const urls = {
    five: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
    current: '',
    hourly: '',
    sixteenDays:''
}

export const fetchTemperature = (country, type, onSuccess, onError) => {
    var options = {
        method: 'GET',
        url: urls[type],
        params: { lat: countryInfoDict[country].lat, lon: countryInfoDict[country].lon },
        headers: {
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
            'x-rapidapi-key': '5aa2f8b61fmsh4c1841de0987d43p140133jsnb02de0dc306d'
        }
    };

    axios.request(options).then(function (res) {
        onSuccess(res)
    }).catch(function (error) {
        onError(error)
    });
}