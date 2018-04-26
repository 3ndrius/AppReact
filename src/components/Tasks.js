import React, { Component } from 'react';


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

        this.setState({
            todos: todosCopy, currentList: ""
        });
        
    }//end function
    render() {

        let allTasks = this.state.todos.map((item,index) => {
            return(
                <li key={index}> {item}</li>
            );
        });
        
        return(
           <div>
                <input placeholder="Enter task " value={this.state.currentList} onChange={this.onInputChange}/>
                <button onClick={this.onClick}> Add </button>
                <br/>
               {this.state.todos.length === 0 ? " No tasks yet" : "You still have some tasks"}: 
               <ul> {allTasks} </ul>
                
             </div>
        );//end return

        
    }//end render

}//end component

export default Tasks;
