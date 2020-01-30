import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TodoForm from "./TodoForm";
import TodoTasks from "./TodoTasks";
import "../css/index.css";

class App extends Component {
  state = {
    todos: [],
    todoToShow: "All"
  };

  // add todo to the front of the todos list
  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  // if todo is completed mark complete as true, else remain the same
  todoComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          };
        }
        else {
          return todo;
        }
      })
    });
  };

  // Consumes a string todoToShow to display todo active, complete, or all
  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    });
  };

  // Remove todo
  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  // Clear todos that care completed with true
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
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <TodoForm onSubmit={this.addTodo} />
            </Col>
          </Row>

          <div className="pt-3">
            {todosArray.map(todo =>
              <TodoTasks
                key={todo.id}
                todoComplete={() => this.todoComplete(todo.id)}
                deleteTodo={() => this.handleDeleteTodo(todo.id)}
                todo={todo}
              />
            )}
          </div>

          <div className="pt-5">
            Todos Left: {this.state.todos.filter(todo => !todo.complete).length}
          </div>

          <div>
            <button type="button" className="btn btn-outline-primary" onClick={() => this.updateTodoToShow("All")}>All</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => this.updateTodoToShow("Active")}>Active</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => this.updateTodoToShow("Complete")}>Complete</button>

            {this.state.todos.some(todo => todo.complete) ? (
              <button type="button" className="btn btn-outline-primary" onClick={this.removeAllTodosThatAreComplete}>Clear Complete</button>
            ) : null}
          </div>

        </Container>
      </div>
    );
  }
}

export default App;