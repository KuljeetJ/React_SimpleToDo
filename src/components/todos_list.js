import _ from 'lodash';
import React from 'react';
import Todo_Header from './Header';
import TodosListItem from './todos_list_item'
export default class todos_list extends React.Component { 

	renderItems() {
		const props = _.omit(this.props,'todos')
		return _.map(this.props.todos, (todo,index)=> <TodosListItem key={index} {...todo} {...props}/>)
	}
 	
 	render(){

 		return(
 			<table>
 				<Todo_Header/>
 				<tbody>
 					{this.renderItems()}
 				</tbody>
  			</table>
 		);
 	}
 }