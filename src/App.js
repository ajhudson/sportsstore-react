import React, { Component } from 'react';
import { SportsStoreDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ShopConnector } from './shop/ShopConnector';
import { InactivityDetection } from './shop/InactivityDetection';

export default class App extends Component {

  render() {
    return (
        <>
        <InactivityDetection bum={ 1 } />
        <Provider store={ SportsStoreDataStore }>
          <Router>
            <Switch>
              <Route path='/shop' component={ ShopConnector } />
              <Redirect to='/shop' />
            </Switch>
          </Router>
        </Provider>
        </>
    );
  }
}