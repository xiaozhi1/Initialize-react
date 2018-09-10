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


//  args传空
export const dalibao_data2 = args => {
    return async (dispatch, getState) => {
        await
            axios.get('http://47.98.64.219:9104/woMallActivity/activityModelApp/queryActivityGroupApp', {
                    params: {
                        page:args
                    }
                }).then(
                    (res)=>{
                        dispatch({ "type": "DALIBAO_2", "resData2": res })
                    }
                )
    };
};

//  args传值
export const action_musics = args => {
    return async (dispatch, getState) => {
        await
            axios.get('http://musicapi.leanapp.cn/comment/music', {
                    params: args
                }).then(
                    //  网易云音乐
                    (res)=>{
                        dispatch({ "type": "action_music", "resMusic": res.data })
                    }
                )
    };
};