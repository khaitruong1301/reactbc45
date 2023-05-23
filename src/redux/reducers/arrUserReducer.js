//rxreducer

const initialState = [
    { email: 'abc@gmail', name: 'abc', password: '123' },
    { email: 'xyz@gmail', name: 'xyz', password: '123' },
]

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_FORM': {

            let values = { ...action.payload };
            console.log('values', values);

            //clone arrState ra 
            let newArrUser = [...state];
            newArrUser.push(values);

            state = newArrUser;
            console.log(state, 'state');
            return state;
        }; 
        case 'DEL_USER':{
            let newState = [...state];
            newState = newState.filter(item => item.email !== action.payload);
            return newState;
        }

        default:
            return state
    }


}



