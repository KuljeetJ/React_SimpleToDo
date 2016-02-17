import React from 'react';
import Create from './create';
import TodoList from './todos_list';

const todos = [
{
	task : 'Eat Shakti sandwich',
	isCompleted:false
},
{
	task : 'Go Gym',
	isCompleted:true
}
]


 export default class App extends React.Component { 
 	
 	constructor(props){
 		super(props);
 		this.state ={
 			todos
 		};
 	}


 	render(){
 		return(
 			<div>
 			 <h1>Kuljeet Jhala</h1>
 			 <Create todos = {this.state.todos} createTask = {this.createTask.bind(this)}/>
 			 <TodoList todos = {this.state.todos} 
 			 toggleTask = {this.toggleTask.bind(this)}
 			 saveTask = {this.saveTask.bind(this)}
 			 deleteTask = {this.deleteTask.bind(this)}
 			 />
 			 </div>
 		);
 	}

 	createTask(task){
 		this.state.todos.push({
 			task,
 			icCompleted: false
 		});
 		
 		this.setState({todos:this.state.todos})
 	}

 	toggleTask(task){

 		const foundTodo = _.find(this.state.todos,todo => todo.task ===task);
 		foundTodo.isCompleted = !foundTodo.isCompleted;
 		this.setState({todos: this.state.todos});

 	}


 	saveTask(oldTask,newTask){

 		const foundTodo = _.find(this.state.todos,todo => todo.task === oldTask);
 		foundTodo.task = newTask;
 		this.setState({todos:this.state.todos});
 	}

 	deleteTask(deleteThis){
		_.remove(this.state.todos,todo => todo.task === deleteThis); 		
 		this.setState({todos:this.state.todos});
 	}
 }