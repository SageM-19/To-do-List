import React, {Component} from 'react';
import ToDoList from './to_do_List/to-do.js';
import Sorter from './sorter/sorter.js';
import './App.css';


class App extends Component {
    render () {
        return (
            <div className="App">
                
                <ToDoList className=""/>
                
                <Sorter />
            </div>
        )
    }
}

export default App;
