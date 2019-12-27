import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import AppContainer from './Routes';

export default class App extends Component {

  render() {
    return (
      <>
        <StatusBar barStyle='light-content' backgroundColor='#6A5ACD' />
        <AppContainer />
      </>
    )
  }
}