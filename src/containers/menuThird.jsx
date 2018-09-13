import React, { Component } from 'react'
import MenuLink from '../components/menuLink/menuLink'
import { Layout } from 'antd'

const { Content } = Layout

export default class MenuThird extends Component {
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
                            MenuThird-----MenuThird
                            </div>
                        </Content>
                </Layout>
            </div>
        )
    }
}
