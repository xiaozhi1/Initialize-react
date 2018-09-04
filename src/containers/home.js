import React, { Component } from 'react';
import store  from './reducer';
import { Link } from 'react-router-dom'
import { Drawer, Button } from 'antd';
// import '../App.css';
import {Menu, Icon , Layout } from 'antd';
import axios from 'axios'
import ButtonFade from '../components/buttonFade/buttonFade';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


store.dispatch({type:'second'});
console.log('store.getState()',store.getState())

class homeHome extends Component {

  componentDidMount(){

      axios.get('http://musicapi.leanapp.cn/comment/music', {
          params: {
              id:186016,
              limit:1
          }
      }).then(
          (res)=>{
            console.log('网易云ssds音乐',res.data)
          }
      )

  }

  render() {
    return (

        <div className="xxx">
          <h1>home-----home</h1>
          {/* 涟漪按钮   */}
          <ButtonFade value="按钮" onClick={this.z.bind(this)} />
          <ButtonFade value="按钮" />
        </div>

    );
  }
  z(klsjadlksajdlksajdlksjlsjl) {
    console.log('外面的函数')
    console.log(klsjadlksajdlksajdlksjlsjl);
  }
}

export default homeHome;
