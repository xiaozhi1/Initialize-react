import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Menu, Icon , Layout } from 'antd';
import { Drawer, Button } from 'antd';
import { connect } from 'react-redux';

//containers  code
import welcome from './containers/welcome'
import homeIndex from './containers/home'
import dalibao from './containers/dalibao'
import menu from './containers/menu'
import './App.css';


const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends Component {
  state = { 
    visible: false ,
    menuArray:[
        {keys:'home',text:'home',url:'home',type:'appstore'},
        {keys:'dalibao',text:'dalibao',url:'dalibao',type:'appstore-o'},
        {keys:'menu',text:'menu',url:'menu',type:'laptop'}
    ]
  };
  
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

  render() {
    return (
      <Router basename="">
        <Layout>
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
                  {
                    this.state.menuArray.map((value, index)=> {
                          return (
                            <Menu.Item key={value.keys}>
                              <Link to={value.url}>
                                  <Icon type={value.type} />
                                    {value.text}
                              </Link> 
                            </Menu.Item>
                          )
                    })
                  }
              </Menu> 
            <Layout>
            <Content>
              {/* ContentContentContentContent  */}
                <Switch>
                  <Route exact path='/' component={welcome} />
                  <Route exact path='/home' component={homeIndex} />
                  <Route exact path='/dalibao' component={dalibao} />
                  <Route exact path='/menu' component={menu} />
                </Switch>
            </Content >
            </Layout>
        </Layout>
      </Router>

    );
  }
}

export default App;
