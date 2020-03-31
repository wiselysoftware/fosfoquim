import { TOGGLE_NAV } from '../actions/actions-types';

const initialState = {
    navOpened: false
};

function rootReducer(state = initialState, action) {

    switch(action.type) {        
        case TOGGLE_NAV:
            return Object.assign({}, state, {
                navOpened: !state.navOpened
            });

        default:
            return state;
    };
    
}

export default rootReducer;