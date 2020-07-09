import React from "react";
import Todos from "./Todos";
import Header from "./Header";
class App extends React.Component{
  state={
    todo:[
      {id:1,title:" Do your peronal stuff",completed:true},
      {id:2,title:"Meeting for an intern",completed:false},
      {id:3,title:"Do your hobby",completed:false},
      {id:4,title:"Cook for guests",completed:false},
      {id:5,title:"Make your bed",completed:false},
      {id:6,title:"Clean your room",completed:false},
      {id:7,title:"Study for  Exams",completed:false},
      {id:8,title:"Water the plants",completed:false},

    ]
  }
  delTodo=(id)=>{
    this.setState(
      {
        todo:[...this.state.todo.filter(todo=>
          todo.id!==id)]
        
      }
    );
  }
  markComplete=(id)=>{
 this.setState({todo:
this.state.todo.map(todo=>{
  if(todo.id==id){
    todo.completed=!todo.completed
  }
  return todo;
})
});
}
render(){

  return(
    <div className="App">
<Header />
<Todos todo={this.state.todo} markComplete={this.markComplete}  delTodo={this.delTodo}/>

    </div>
  );

}




}

export default App;