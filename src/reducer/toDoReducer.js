import {SET_TASK, SET_IMPORTANT, SET_URGENT, DELETE} from '../actions/actions.js'

const toDoState = [];

let newState = [];

const toDoReducer = (state= toDoState, action) => {
    switch (action.type) {
        case SET_TASK:
            return [...state, {task: action.input, type: "default"}];

        case SET_URGENT:
            return [...state, {task: action.input, type: "urgent"}]

        case SET_IMPORTANT:
            return [...state, {task: action.input, type: "important"}]

        case DELETE:
            newState = [...state]
            newState.splice(action.index, 1)
            return newState
            //          return [...state].filter(element => element != state[action.index]);

        default:
            return state;
    }
}

export default toDoReducer;