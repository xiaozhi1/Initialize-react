import { createStore } from 'redux';
/*
 * 参数
 * createStore(reducer, preloadedState, enhancer) 
 * 返回值
 * {
    dispatch, ===> 分发action
    subscribe, 
    getState, ===> getter 获取redux当前的state
    replaceReducer,
  }
 */
 let reducer = (preState,action)=>{
 	switch(action.type){
 		case 'first':
 			return  Object.assign(preState,{name:'first cli'})
 		case 'second':
 			return  Object.assign(preState,{name:'2nd called'})
 		default:
 			return preState
 	}
 }
 let store = createStore(reducer,{a:1});
//  module.exports=store

export default store;




