import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import looger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducer/index.js";
// let reducers = (preState,action)=>{
//     switch(action.type){
//         case 'first':
//             return  Object.assign(preState,{name:'first cli'})
//         case 'second':
//             return  Object.assign(preState,{name:'2nd called'})
//         default:
//             return preState
//     }
// }
const store = createStore(reducers, applyMiddleware(looger, thunk));
// store.dispatch({type:'first'})
// console.log('dispatch',store.getState())
ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>
    , document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<LocaleProvider locale={zh_CN}><App /></LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
