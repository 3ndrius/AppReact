import React, { Component } from 'react';


import SingleTask from './SingleTask';





class Tasks extends Component {

    constructor(props) {
        super(props);
        // this.onInputChange = this.onInputChange.bind(this); adding without es6

       
        this.state = ({
            todos: [],
            currentList: "",
            prod:""

            
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
        
        localStorage.setItem('item', this.state.todos);
        

        this.setState({
            todos: todosCopy, currentList: ""
           
            
        });
        

        

    }//end function

    componentDidMount( ) {
        const zad = localStorage.getItem('item');

        this.setState({
            prod: zad
            
        });
    }

    deleteTask = (index) =>{
       
        let todoCopy = this.state.todos.slice();
        todoCopy.splice(index,1);
        this.setState({
            todos:todoCopy
        
        });
    }


    componentDidMount() {
        console.log("Component mounted");
    }
    componentWillUpdate() {
        console.log("Component will update");
    }
    componentDidUpdate() {
        console.log("component updated");
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
               <br/>
               {this.state.currentList}
               <ul> {allTasks}  </ul>
               <br/>

               <h1> Witaj: {localStorage.getItem('item')} </h1>
               <h2> Inner {this.state.todos}</h2>
               <br/>
               <h2> Prod {this.state.prod}</h2>
                
             </div>
        );//end return

        
    }//end render

}//end component

export default Tasks;
