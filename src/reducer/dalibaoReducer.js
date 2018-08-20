
  const dalibao_ori  = {
    "resData":{},
  
  }
  export default (state = dalibao_ori,action)=>{
    switch (action.type){
      case "DALIBAO_DATA":
       return {
         ...state,
         "resData":action.resData
       }
        break;
      default:
        state;
    }
    return state;
  }
  