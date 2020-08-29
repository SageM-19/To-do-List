import React, {Component} from 'react';
import './to-do.css';
import {connect} from 'react-redux';
import {set_task, set_important, set_urgent} from '../actions/actions.js'

// import {addText, deleteText, clearText} from '../actions/actions.js';

class ToDoList extends Component {
    constructor(props){
        super(props)
        this.state = {value: ""};

        
        this.emptyThisStateValue = this.emptyThisStateValue.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.createTask = this.createTask.bind(this);
        this.createImportant = this.createImportant.bind(this);
        this.createUrgent = this.createUrgent.bind(this);
        
    }
    
    
    
    emptyThisStateValue = () => {
        this.setState({value: ""});
    }




    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    createTask =() => {
        this.props.createDefaultTask(this.state.value);
        this.emptyThisStateValue()
    }

    createImportant =() => {
        this.props.createImportantTask(this.state.value);
        this.emptyThisStateValue();
    }

    createUrgent = () => {
        this.props.createUrgentTask(this.state.value);
        this.emptyThisStateValue();
    }




    render () {
        return ( 
            <div className="container-fluid makeToDo "> 
                <div className="row">

                    <div className = "col-1 toDoType">

                        <div className="btn-group dropup">
                            <button type="button" className="btn dropdown hold_to_do" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <div>+</div>

                            </button>
                            <div className="controlDropdown">
                                <div className="dropdown-menu">


                                    <div className=""> <button onClick={this.createTask} className=" btn ToDo default">Default</button></div>

                                    <div className=""> <button onClick={this.createImportant} className=" btn ToDo important">Important</button></div>

                                    <div className=""><button onClick={this.createUrgent} className=" btn ToDo urgent">Urgent</button>  </div>



                                </div>
                            </div>
                        </div>




                    </div>


                    <div className="col-11 toDoContainer"><input type="text" value={this.state.value} onChange={this.handleChange} className="task"/> </div>




                </div>



            </div>)
    }
};

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDefaultTask: (input) => {dispatch(set_task(input))},

        createImportantTask: (input) => {dispatch(set_important(input))},

        createUrgentTask: (input) => {dispatch(set_urgent(input))}

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

