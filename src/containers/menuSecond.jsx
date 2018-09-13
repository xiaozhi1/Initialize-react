import React, { Component } from 'react'
import MenuLink from '../components/menuLink/menuLink'
import { Layout } from 'antd'

const { Content } = Layout

export default class MenuSecond extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Layout>
                        <MenuLink></MenuLink>
                        <Content >
                            <div className="content">
                            MenuSecond-----MenuSecond
                            </div>
                        </Content>
                </Layout>
            </div>
        )
    }
}
