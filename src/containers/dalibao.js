import React, { Component } from 'react'
import {connect} from "react-redux";
import dalibao from "../mock/dalibao"
import {bindActionCreators} from "redux";
import * as dalibaoAction from "../action/dalibaoAction";
import * as paramsSetAction from "../action/paramsSetAction";

// import store from "../pages/xxx"
// let counter = 0;
// store.dispatch({type:'second'});
// console.log('xxxxxxxxxxx',store.getState())

class Dalibao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dalibao: dalibao
        }
    }
    componentDidMount() {
        
        this.props.dalibaoAction.dalibao_data()

        let page = 2
        this.props.dalibaoAction.dalibao_data2(page)
        
        let args = {
            id:186016,
            limit:1
        }
        this.props.dalibaoAction.action_musics(args)

        let number = 2
        this.props.paramsSetAction.setHomeNav(number)
        // 设置以后,点击其他页面,输出的是2. 而非初始化的1
    }
    componentWillReceiveProps(nextProps){
        console.log('nextProps',nextProps)
    }
    render() {
        console.log('dalibao1',this.props.dalibao1)
        console.log('dalibao2',this.props.resDDDDD)
        console.log('dalibaoMusic',this.props.music)
        console.log('this.props.paramsRedu',this.props.paramsRedu)

        return (
            
            <div>
                <h1>dalibao-----dalibao</h1>
            </div>
        )
    }
}
// export default Dalibao
export default connect((state) => {
    return {
        dalibao1: state.dalibaoReducer.resData,
        resDDDDD: state.dalibaoReducer.resData2,
        music: state.dalibaoReducer.resMusic,
        paramsRedu: state.paramsSetReducer.paramsRedu
    };
},
(dispatch) => {
    return {
        dalibaoAction: bindActionCreators(dalibaoAction, dispatch),
        paramsSetAction: bindActionCreators(paramsSetAction, dispatch)
    };
}
)(Dalibao);
