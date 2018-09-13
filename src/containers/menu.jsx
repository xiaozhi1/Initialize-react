import React, { Component } from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Layout } from 'antd';
import '../style/menu.css'
import MenuLink from '../components/menuLink/menuLink'

const { Content } = Layout;

class Menuss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'alipay',
        }
        console.log('dalibao-->点击以后再点击menu,值为2,若直接进menu,值为1------>',this.props.paramsRedu)
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }

    render() {
        return (
            <div className="menu">
                <Layout>
                        <MenuLink></MenuLink>
                        <Content >
                            <div className="content">
                                MenuFirst-----MenuFirst
                            </div>
                        </Content>
                </Layout>
            </div>
            
            
        )
    }
}
export default connect((state) => {
    return { paramsRedu: state.paramsSetReducer.paramsRedu };
},
(dispatch) => {
    return { };
}
)(Menuss)
