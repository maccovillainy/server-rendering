import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import App from './app'
import routes from './routes'
import { Router, Route,  browserHistory, match } from 'react-router';

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(<Router {...renderProps} />, document.getElementById('root'));
});
