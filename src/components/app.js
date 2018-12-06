import React, { Component } from 'react';
import ApiCaller from './apicaller';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <p>emails for you!</p>
        <ApiCaller />
      </div>
    );
  }
}
