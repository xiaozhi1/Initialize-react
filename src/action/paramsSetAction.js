export const setHomeNav = args => {
    return async (dispatch) => {
        dispatch({"type": "PARAME_TYPE", "actArg": args})
    };
};