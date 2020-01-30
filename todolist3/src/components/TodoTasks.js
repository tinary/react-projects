import React from 'react';


export default (props) => (
  <div className="todotext">
    
    <div style={{ textDecoration: props.todo.complete ? "line-through" : "" , cursor: "pointer" }}
          onClick={props.todoComplete}>
        {props.todo.text}
    </div>

    <button type="button" className="btn " onClick={props.deleteTodo}><i class="fas fa-times"></i></button>

  </div>
);