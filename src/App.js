import React, { Component } from 'react';
import { SportsStoreDataStore } from './data/DataStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ShopConnector } from './shop/ShopConnector';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeout: 1000 * 10,
      showModal: false,
      userLoggedIn: false,
      isTimedOut: false
    };

    this.idleTimer = null;
    this.onIdle = this._onIdle.bind(this);
  }

  _onIdle(e) {
    console.log(new Date().toISOString() + ' user is idle');
  }

  render() {
    return (
      <>
        <IdleTimer 
          ref={ ref => { this.idleTimer = ref }}
          element={ document }
          onIdle={ this.onIdle }
          debounce={ 250 }
          timeout={ this.state.timeout }
        />
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