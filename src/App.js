import React from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FiveDays from './forecast_type/5days';
import Current from './forecast_type/Current';
import Hourly from './forecast_type/Hourly';
import Onesixdays from './forecast_type/16days';
import Onetwozerohours from './forecast_type/120hours';
import CityOptionsHome from './city_nav_option/CityOptions';

const App = (props) => {


  return (
    <div>
      <BrowserRouter>
          <Switch>
          <Route path="/:component/:country" component={Nav} />
          </Switch>
        <Switch>
          <Route exact path="/home" component={CityOptionsHome} />
          <Route path="/5days/:country" component={(props)=><FiveDays country={props.match.params.country}/>} />
          <Route path="/current/:country" component={(props)=><Current country={props.match.params.country}/>} />
          <Route path="/hourly/:country" component={(props)=><Hourly country={props.match.params.country} />} />
          <Route path="/16days/:country" component={(props)=><Onesixdays country={props.match.params.country}/>} />
          <Route path="/120hrs/:country" component={(props)=><Onetwozerohours country={props.match.params.country}/>} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
