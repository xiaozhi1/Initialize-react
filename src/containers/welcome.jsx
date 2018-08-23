import React, { Component } from 'react';
import logo from '../logo.svg';

class homeHome extends Component {
  
  // componentDidMount(){
  //   axios.get('http://47.98.64.219:9104/woMallActivity/activityModelApp/findActivitysByParam?model=3&actType=1&page=1')
  //   .then((r)=>{
  //      console.log('rrrrrrr',r)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  render() {
    return (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>welcome</h1>
        </div>
    );
  }
}

export default homeHome;
