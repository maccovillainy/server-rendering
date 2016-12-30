import React, {Component} from 'react';
import { Router, Route } from 'react-router';

export default class Start extends Component{
  constructor(props) {
    super(props);

    this.state = {
      test: 1111
    }
  }
  render(){
    return(
      <div>
        <h1>Hello world! {this.state.test}</h1>
      </div>
    )
  }
}

