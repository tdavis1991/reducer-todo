import { TOGGLE_COMPLETE_TASK, ADD_TASK } from './actions';

export const initialState = [{
    task: '',
    completed: false
}];

export const todoReducer = (state, action) => {

    switch(action.type) {

        case TOGGLE_COMPLETE_TASK: 
            return {...state, completed: !state.completed};

        case ADD_TASK: 
            return {...state, task: action.payload};

        default:
            return state
    }
};