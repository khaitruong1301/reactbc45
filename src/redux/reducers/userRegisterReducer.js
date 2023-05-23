



const initialState = { email: '', name: '', password: '' }//0001



export const userRegisterReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'HANDLE_CHANGE_FORM': {
            const {id,value} = action.payload;
            let newState = {...state};
            //immutable (bất biến)
            newState[id] = value;

            //Cập nhật state
            state = newState;
             
        };break;
    }
    return state;
}