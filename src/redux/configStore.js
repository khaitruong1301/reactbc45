import { configureStore } from '@reduxjs/toolkit'
import { userRegisterReducer } from './reducers/userRegisterReducer';
import arrUserReducer from './reducers/arrUserReducer';
import cartReducer from './reducers/cartReducer';

export const store = configureStore({
    reducer: {
        likeReducer: (state = 10, action) => {
            if (action.type === 'increaseLike') {
                state += action.payload;
            }
            return state;
        },
        imgReducer: (state = "./img/black-car.jpg", action) => {
            switch (action.type) {
                case 'changeIMG': {
                    state = action.payload;
                }; break;
            }

            return state;
        },
        fontSizeReducer: (state = 30, action) => {
            switch(action.type) {
                case 'CHANGE_FONT_SIZE':{
                    state += action.payload;
                };break
            }
            return state
        },
        userRegisterReducer: userRegisterReducer,
        arrUserReducer:arrUserReducer,
        cartReducer:cartReducer
    }
});


