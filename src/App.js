import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import { Drawer, Button } from 'antd';
import homeIndex from './pages/home'
import dalibao from './pages/dalibao'
import menu from './pages/menu'
import './App.css';
import { Layout } from 'antd';
import axios from 'axios'


const { Header, Footer, Sider, Content } = Layout;


class App extends Component {

  // componentDidMount(){
  //   axios.get('http://47.98.64.219:9104/woMallActivity/activityModelApp/findActivitysByParam?model=3&actType=1&page=1')
  //   // axios.get('http://10.20.0.6:9104/woMallActivity/activityModelApp/findActivitysByParam?model=3&actType=1&page=1')
  //   .then((r)=>{
  //      console.log('rrrrrrr',r)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  render() {
    return (
      <Router basename="">
        <Switch>
          <Route exact path='/' component={homeIndex} />
          <Route exact path='/dalibao' component={dalibao} />
          <Route exact path='/menu' component={menu} />
        </Switch>
      </Router>
      // <div className="xxx">
      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <h1 className="App-title">Welcome to React</h1>
      //     </header>
      //     <p className="App-intro">
      //       To get started, edit 洒洒水所所所所所所所所水水水水<code>src/App.js</code> and save to reload.
      //     </p>
      //     <div className="App">
      //       <Button type="primary">Button</Button>
      //     </div>
      //   </div>
      // </div>

    );
  }
}

export default App;
