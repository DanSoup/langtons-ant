import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './normalize.css';
import './index.scss';

import MainPage from './components/MainPage/MainPage.js'

class App extends Component {
  render () {
    // return <BrowserRouter basename={`/${process.env.BS_CONFIG.BS_FOLDER}/${process.env.BS_CONFIG.BS_URL}`}>
    return <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  };
}

ReactDOM.render(<App/>, document.getElementById('app'));