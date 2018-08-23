import React, { Component } from 'react';
import store  from './reducer';
import { Link } from 'react-router-dom'
import { Drawer, Button } from 'antd';
// import '../App.css';
import {Menu, Icon , Layout } from 'antd';
import axios from 'axios'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


store.dispatch({type:'second'});
console.log('store.getState()',store.getState())

class homeHome extends Component {

  render() {
    return (

        <div className="xxx">
          <h1>home-----home</h1>
        </div>

    );
  }
}

export default homeHome;
