import React, {Component} from 'react';
import Start from 'react-router';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      test: 1111
    }

      setTimeout(() =>)
  }
  componentWillUpdate() {
    console.log(9990)
    this.setState({
      test: 2222
    })
  }
  render(){
    return(
      <div>
        <h1>Hello world! {this.state.test}</h1>
      </div>
    )
  }
}