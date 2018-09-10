
  const dalibao_ori  = {
    "resData":{name:1},
    "resData2":{name:2},
    "resMusic":null
  
  }
  export default (state = dalibao_ori,action)=>{
    switch (action.type){
      case "DALIBAO_DATA":
       return {
         ...state,
         "resData":action.resData
       }
        break;
      case "DALIBAO_2":
       return {
         "resData2":action.resData2
       }
        break;
      case "action_music":
       return {
         "resMusic":action.resMusic
       }
        break;
      default:
        state;
    }
    return state;
  }
  