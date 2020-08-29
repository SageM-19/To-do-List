import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import toDoReducer from './reducer/toDoReducer';

const store = createStore(toDoReducer)

//console.log(store.getState())
//const watch = store.subscribe(() => console.log(store.getState()));


//const settaskPractice = (input) => {
//    return {
//        type: "SET_TASK", input
//};
//}
//
//const set_importantPractice = (input) => {
//    return {
//        type: "SET_IMPORTANT", input
//};
//}
//
//const set_urgentPractice = (input) => {
//    return {
//        type: "SET_URGENT", input
//};
//}
//
//const delete_taskPractice = () => {
//    return {
//        type: "DELETE"
//    }
//}
//
//store.dispatch(settaskPractice("hello"))
//store.dispatch(settaskPractice("Welcome"))
//store.dispatch(set_importantPractice("fulfill"))
//store.dispatch(set_urgentPractice("Like a Charm"))
//store.dispatch(delete_taskPractice())
//
//console.log(store.getState())



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
