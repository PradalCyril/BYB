import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Geo_page from './Geo_page';
import Address_page from './Address_page';
import FirstPage from './components/FirstPage/FirstPage.js';

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <NavLink exact to="/"> Back </NavLink>
                <NavLink to="/Geo_page"> Geolocalise-moi </NavLink>
		<NavLink to="/Address_page"> Je donne mon adresse </NavLink> 

                <Switch>
                  <Route exact path="/" component={FirstPage} />
                  <Route path="/Geo_page" component={Geo_page} />
		  <Route path="/Address_page" component={Address_page} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default Routing;
