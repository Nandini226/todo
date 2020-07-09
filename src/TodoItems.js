import React from "react";
import PropTypes from 'prop-types';
import './TodoItems.css';
class TodoItems extends React.Component{
    // this.markComplete=this.markComplete.bind(this);
    getStyle=()=>{
    return{
        background: '#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
}



    render(){
        const{id,title}=this.props.todo;
        return (
<div style={this.getStyle()}>
    <p>
        <input type="checkbox"
         onChange={this.props.markComplete.bind(this,id)} />{''}
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
        </p>
</div>

)
    }
}

const btnStyle={
    backgroung:'#ff0000',
    border:'none',
    color:'red',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}





TodoItems.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItems;