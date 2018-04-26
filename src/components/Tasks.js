import React, { Component } from 'react';


class Tasks extends Component {

    constructor(props) {
        super(props);
        // this.onInputChange = this.onInputChange.bind(this); adding without es6
        this.state = ({
            todos: ["Running", "Walking"],
            currentList: ""
        });
    }//end of constructor

    onInputChange = (e) => {
        this.setState({
            currentList: e.target.value
        });
    }
    render() {
        return(

            <div>
                <input placeholder="Enter task " value={this.state.currentList} onChange={this.onInputChange}/>
                <button> Add </button>
                <br/>
               {this.state.todos.length === 0 ? " No tasks yet" : "You still have some tasks"}
                
             </div>
        );//end return

        
    }//end render

}//end component

export default Tasks;
