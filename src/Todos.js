import React from "react";
import TodoItems from './TodoItems.js' ;
import PropTypes from 'prop-types';
class Todos extends React.Component{

    render()
{
return this.props.todo.map((todo)=>(
<TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>


));

}



}

Todos.propTypes = {
    todo: PropTypes.array.isRequired
}
export default Todos;