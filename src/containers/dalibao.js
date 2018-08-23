import React, { Component } from 'react'
import {connect} from "react-redux";
import dalibao from "../mock/dalibao"
import {bindActionCreators} from "redux";
import * as dalibaoAction from "../action/dalibaoAction";

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
        console.log('resData1',this.props.resData)
    }
    render() {
        // const dalibao = this.state
        
        // this.props.dalibaoAction.dalibao_data(
        //         // {
        //         // 'model':3,
        //         // 'actType':1,
        //         // 'page':1
        //         // }
        // )
        console.log('resData2',this.props.resData)
        console.log('this.props',this.props)
        console.log('dalibao',dalibao)
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
        resData: state.dalibaoReducer.resData
    };
},
(dispatch) => {
    return {
        dalibaoAction: bindActionCreators(dalibaoAction, dispatch)
    };
}
)(Dalibao);
