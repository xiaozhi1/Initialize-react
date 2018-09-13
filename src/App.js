import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Menu, Icon , Layout } from 'antd';
import { Drawer, Button } from 'antd';
import { connect } from 'react-redux';

//containers  code
import Welcome from './containers/welcome'
import HomeIndex from './containers/home'
import Dalibao from './containers/dalibao'
import DalibaoSecond from './containers/dalibaoSecond'
import Menus from './containers/menu'
import MenuSecond from './containers/menuSecond'
import MenuThird from './containers/menuThird'
import './App.css';


const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends Component {
  state = { 
    visible: false ,
    menuArray:[
        {keys:'home',text:'home',url:'/home',type:'appstore'},
        {keys:'dalibao',text:'dalibao',url:'/dalibao',type:'appstore-o'},
        {keys:'menu',text:'menu',url:'/menu/first',type:'laptop'}
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
      <Router basename="/">
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
                <Switch>
                  <Route exact path='/' component={Welcome} />
                  <Route exact path='/home' component={HomeIndex} />
                  <Route exact path='/dalibao' component={Dalibao} />
                  <Route exact path='/dalibao/dalibaoSecond' component={DalibaoSecond} />
                  <Route exact path='/menu/first' component={Menus} />
                  <Route exact path='/menu/menuSecond' component={MenuSecond} />
                  <Route exact path='/menu/menuThird' component={MenuThird} />
                </Switch>
            </Content >
            </Layout>
        </Layout>
      </Router>

    );
  }
}

export default App;
