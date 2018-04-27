import React, { Component } from 'react';


import SingleTask from './SingleTask';

class Tasks extends Component {

    constructor(props) {
        super(props);
        // this.onInputChange = this.onInputChange.bind(this); adding without es6
        this.state = ({
            todos: [],
            currentList: ""
        });
    }//end of constructor

   
    onInputChange = (e) => {
        this.setState({
            currentList: e.target.value
        });
    }// end function
    onClick = () => {
        let todosCopy = this.state.todos.slice();
        todosCopy.push(this.state.currentList);
        localStorage.setItem("todo", this.state.currentList);

        this.setState({
            todos: todosCopy, currentList: ""
        });
        
    }//end function

    deleteTask = (index) =>{

        let todoCopy = this.state.todos.slice();
        todoCopy.splice(index,1);
        this.setState({
            todos:todoCopy
        });
    }
    render() {

        let allTasks = this.state.todos.map((item,index) => {
            return(
                <SingleTask todo={item} key={index} delete={ () => this.deleteTask(index)}/>
            );
        });
        
        return(
           <div>
                <input placeholder="Enter task " value={this.state.currentList} onChange={this.onInputChange}/>
                <button onClick={this.onClick}> Add </button>
                <br/>
               {this.state.todos.length === 0 ? " No tasks yet" : "You still have some tasks"}: 
               <ul> {allTasks}  </ul>
                
             </div>
        );//end return

        
    }//end render

}//end component

export default Tasks;
