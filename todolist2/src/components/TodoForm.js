import React, { Component } from 'react';
import { Input } from 'reactstrap';
import shortid from 'shortid';

class TodoForm extends Component {
  state = {
    text: ""
  };

  //what does this function do????
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();  //so it doesn't refresh
    //submit the form, need to be able to create a new to do and pass it to our todo list
    // this onSubmit function is from App.js addTodo function
    this.props.onSubmit({
      id: shortid.generate(), //generate unique id for this specific todo
      text: this.state.text,  //we get this from the state, whatever the user typed
      complete: false         //you just add a new todo, but the todo is not complete yet, so set it to false
    });
    this.setState({           //to clear out the input field once entered a todo
      text: ""
    });
  };


  render() {
    return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={this.handleSubmit}>
          <input name="text" type="text" className="form-control" placeholder="enter task" 
                  value={this.state.text} onChange={this.handleChange}>
          </input>
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    </div>
    );
  }

}
export default TodoForm;