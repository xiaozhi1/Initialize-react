import React, { Component } from 'react';
import store  from './red.js';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import { Drawer, Button } from 'antd';
// import '../App.css';
import { Layout } from 'antd';
import axios from 'axios'


const { Header, Footer, Sider, Content } = Layout;

store.dispatch({type:'second'});
console.log('store.getState()',store.getState())

class homeHome extends Component {
  state = { visible: false };
  
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
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
        <div className="xxx">111
          <Link to="/menu">
            <div className="App"><img src={logo} className="App-logo" alt="logo" /></div>
          </Link>
        </div>
    //   <div className="xxx">
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <h1 className="App-title">Welcome to React</h1>
    //       </header>
    //       <p className="App-intro">
    //         To get started, edit 洒洒水所所所所所所所所水水水水<code>src/App.js</code> and save to reload.
    //       </p>
    //       <div className="App">
    //         <Button type="primary">Button</Button>
    //       </div>
    //     </div>

    //     <div>
    //       <Layout>
    //         <Header>Header</Header>
    //         <Content>Content</Content>
    //         <Footer>Footer</Footer>
    //       </Layout>

    //       <Layout>
    //         <Header>Header</Header>
    //         <Layout>
    //           <Sider>Sider</Sider>
    //           <Content>Content</Content>
    //         </Layout>
    //         <Footer>Footer</Footer>
    //       </Layout>

    //       <Layout>
    //         <Header>Header</Header>
    //         <Layout>
    //           <Content>Content</Content>
    //           <Sider>Sider</Sider>
    //         </Layout>
    //         <Footer>Footer</Footer>
    //       </Layout>

    //       <Layout>
    //         <Sider>Sider</Sider>
    //         <Layout>
    //           <Header>Header</Header>
    //           <Content>Content</Content>
    //           <Footer>Footer</Footer>
    //         </Layout>
    //       </Layout>
    //     </div>
    //   </div>

    );
  }
}

export default homeHome;
