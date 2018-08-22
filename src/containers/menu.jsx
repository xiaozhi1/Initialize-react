import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { Layout } from 'antd';
import '../style/menu.css'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Dalibao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'alipay',
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }

    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="mail">
                            <Link to="/dalibao">
                            <Icon type="mail" />Navigation One
                            </Link>
                            </Menu.Item>

                            <Menu.Item key="app" >
                            <Icon type="appstore" />Navigation Two
                            </Menu.Item>

                            <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                            </Menu.Item>
                        </Menu> 
                    </Sider>
                    <Content >
                        <div className="content">
                        Content
                        </div>
                    </Content>
                </Layout>
                {/* <Footer>Footer</Footer> */}
            </Layout>
            
        )
    }
}
