import React, { Component } from 'react';
import { SportsStoreDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ShopConnector } from './shop/ShopConnector';
import RedditRetriever from './reddit/RedditRetriever';
import { InactivityDetection } from './shop/InactivityDetection';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default class App extends Component {

  render() {
    return (
        <>
        <Provider store={ SportsStoreDataStore }>
          <Router>
            <Switch>
              <Route path='/reddit-retriever'>
                <RedditRetriever />
              </Route>
              <Route path='/shop' component={ ShopConnector } />
              <Redirect to='/shop' />
            </Switch>
          </Router>
        </Provider>
        </>
    );
  }
}