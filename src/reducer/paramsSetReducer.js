
  const data  = {
    "paramsRedu":1,
  }
  export default (state = data,action)=>{
    switch (action.type){
      case "PARAME_TYPE":
       return {
         "paramsRedu":action.actArg
       }
        break;
      default:
        state;
    }
    return state;
  }
  