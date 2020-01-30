import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoForm from "./TodoForm";
import TodoTasks from "./TodoTasks";

class App extends Component {
  //create a todo list, store the tasks in the todos list
  state = {
    todos: [],
    todoToShow: "All"
  };

  //add todo to the front of todos list
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };
  //Another way of writing it:
  // addTodo = (todo) => {
  //   this.setState({
  //     todos: [todo, ...this.state.todos]
  //   });
  // };

  toggleComplete = (id) => {
    this.setState({
      //go thorugh one by one on the todo
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          //suppose to update
          return {
            // id: todo.id,
            // text: todo.text,
            // complete: !todo.complete
            ...todo,
            complete: !todo.complete
          };
        }
        else {
          //don't want to change any value
          return todo;
        }
      })
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  removeAllTodosThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };



  render() {
    let todosArray = [];

    if (this.state.todoToShow === "All") {
      todosArray = this.state.todos;
    }
    else if (this.state.todoToShow === "Active") {
      todosArray = this.state.todos.filter(todo => !todo.complete);
    }
    else if (this.state.todoToShow === "Complete") {
      todosArray = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <Container className="text-center p-5">
          <h1 className="m-3">To Do List</h1>
          <TodoForm onSubmit={this.addTodo} />          
          {/* {this.state.todos.map(todo =>  */}
          {todosArray.map(todo => 
                // <div key={todo.id}>{todo.text}</div>
                <TodoTasks 
                  key={todo.id} 
                  toggleComplete={() => this.toggleComplete(todo.id)} 
                  // text={todo.text} 
                  onDelete={() => this.handleDeleteTodo(todo.id)}
                  todo={todo}
                />
          )}
          <div>todos left: {this.state.todos.filter( todo => !todo.complete).length}</div>
          <div>
            <button onClick={() => this.updateTodoToShow("All")}>All</button>
            <button onClick={() => this.updateTodoToShow("Active")}>Active</button>
            <button onClick={() => this.updateTodoToShow("Complete")}>Complete</button>
          </div>

          {this.state.todos.some(todo => todo.complete) ? (
            <div>
              <button onClick={this.removeAllTodosThatAreComplete}>Remove All Complete Todos</button>
            </div>
          ) : null}
          
        </Container>
      </div>
    );
  }
}

export default App;