import React, {Component} from 'react';
import Task from '../task/task.js'
import './sorter.css';
import {connect} from 'react-redux';
//import {delete_task} from '../actions/actions.js'

// import {addText, deleteText, clearText} from '../actions/actions.js';

class Sorter extends Component {
    constructor(props){
        super(props)
        
        this.setTypeDefault = this.setTypeDefault.bind(this);
        
        this.setTypeImportant = this.setTypeImportant.bind(this);
        
        this.setTypeUrgent = this.setTypeUrgent.bind(this);
        
        this.setTypeAll = this.setTypeAll.bind(this);
        
        this.controlType = this.controlType.bind(this);
        
        this.state = {
            theType: ""
        }

        
    }
    
    setTypeDefault = () => {
        this.setState((state) => {

    return {theType: "default"}
  });
        
    }
    
    setTypeImportant = () => {
        this.setState((state) => {

    return {theType: "important"}
  });
        
    }
    
    setTypeUrgent = () => {
        this.setState((state) => {

    return {theType: "urgent"}
  });
        
    }
    
    setTypeAll = () => {
        this.setState((state) => {

    return {theType: ""}
  });
        
    }
    
    controlType = (Tasks) => {
     
        
        return Tasks;
    }
    
    
    
    


    render () {
        
        let myTasks = [];
        
        switch(this.state.theType) {
            case "default":
                myTasks = this.props.toDos.filter(element => element.type === "default").map(element => <Task key={element.task+"do well please"} activity={element.task} type={element.type} buttontype={"button-" + element.type} />);
                break;
            case "important": 
                myTasks = this.props.toDos.filter(element => element.type === "important").map(element => <Task key={element.task+"do well please"} activity={element.task} type={element.type} buttontype={"button-" + element.type} />);
                break;                                      
            case "urgent":
                myTasks = this.props.toDos.filter(element => element.type === "urgent").map(element => <Task key={element.task+"do well please"} activity={element.task} type={element.type} buttontype={"button-" + element.type} />);
                break;
            
            default:
                myTasks = this.props.toDos.map(element => <Task key={element.task+"do well please"} activity={element.task} type={element.type} buttontype={"button-" + element.type} />);
                break;
                

        }
                                                                                            
    

        return (
            
            <div> 
               <button type="button" className="btn types SortItems"  data-toggle="modal" data-target="#exampleModal">Sort Tasks</button>
        
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    
                    <div className="modal-dialog SortItems" role="document">
                        
                        <div className="modal-content">
                            
 
      <div className="modal-body types">
          
          <div className=""> <button  className=" btn ToDo btn-secondary"  onClick={this.setTypeAll}>All</button></div>
          
          <div className=""> <button  className=" btn ToDo default" onClick={this.setTypeDefault}>Default</button></div>
          
          <div className=""> <button  className=" btn ToDo important" onClick={this.setTypeImportant}>Important</button></div>
          
          <div className=""><button  className=" btn ToDo urgent" onClick={this.setTypeUrgent}>Urgent</button>  </div>
          
          <div className="someMoreSpace"> <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
          </div>
        
      </div>

    </div>
  </div>
</div>
            
                
            
            <div className="someSpace">{myTasks}</div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        toDos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
