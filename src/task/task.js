import React, {Component} from 'react';
import './task.css';
import {connect} from 'react-redux';
import {delete_task} from '../actions/actions.js'

class Task extends Component {
    constructor(props){
        super(props)
        
        this.deleteTask = this.deleteTask.bind(this)

    }
    
        handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    deleteTask = () => {
        let index = this.props.tasks.indexOf(this.props.tasks.find(element => element.task === this.props.activity))

        this.props.removeTask(index)
    }

    
    render () {
        
        let display = "disappea";



        return (

            <div className= { "container taskHandler " +this.props.type }> 
                <div className="row">
                    <div className="btn-group dropright col-1">
                        <button type="button" className={this.props.buttontype + " dropdown control-settings"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> O

                        </button>
                        <div className="controlDropright">
                            <div className="dropdown-menu">


                             
                                    
                                    <div className=""><button className=" btn change delete" onClick={this.deleteTask}>Delete</button> </div>
            
                            </div>
                        </div>
                    </div>


                    <div className="col-11">
                        <div className="row"></div>
                        <div className="col-12"> 
                            <p className="task-info">{this.props.activity}</p>

                        </div>
                        
                        
                    </div>
                </div>
            </div>

        )
    }
};

const mapStateToProps = (state) => {
    return {
        tasks: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: (index) => {dispatch(delete_task(index))}

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Task);
