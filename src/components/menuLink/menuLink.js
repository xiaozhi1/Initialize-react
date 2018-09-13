import React, { Component } from 'react'
import { Layout,Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
const { Sider} = Layout;

export default class MenuLink extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Sider>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    breakpoint="xl"
                >
                    <Menu.Item key="menuSecond">
                        <Link to="/menu/first">
                            <Icon type="laptop" />menuFirst
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="secondDalibao" >
                        <Link to="/menu/menuSecond">
                            <Icon type="laptop" />menuSecond
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="secondHome" >
                        <Link to="/menu/menuThird">
                            <Icon type="laptop" />menuThird
                        </Link>
                    </Menu.Item>
                </Menu> 
            </Sider>
        )
    }
}





