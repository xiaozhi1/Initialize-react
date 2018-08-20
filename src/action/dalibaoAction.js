import axios from 'axios';

export const dalibao_data = args => {
    return async (dispatch, getState) => {
        // await axios.get('http://47.98.64.219:9104/woMallActivity/activityModelApp/findActivitysByParam?model=3&actType=1&page=1',
        await
            axios.get('http://47.98.64.219:9104/woMallActivity/activityModelApp/findActivitysByParam', {
                    params: {
                        model:3,
                        actType:1,
                        page:1
                    }
                }).then(
                    (res)=>{
                        dispatch({ "type": "DALIBAO_DATA", "resData": res })
                    }
                )
    };
};

