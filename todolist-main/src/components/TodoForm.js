import React, { Component } from 'react';
import shortid from 'shortid';


class TodoForm extends Component {
  state = {
    text: ""
  };

  // Save user input
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); 
    
    this.props.onSubmit({
      id: shortid.generate(),  //generate unique id for todo
      text: this.state.text,   //get this from the state, whatever the user typed
      complete: false          //default complete to false becuase it's a new todo task
    });
    this.setState({            //to clear out the input field once entered a todo
      text: ""
    });
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <input name="text" type="text" className="form-control" placeholder="enter task"
              value={this.state.text} onChange={this.handleChange}>
            </input>
            <div className="input-group-append">
              <button type="button" className="btn btn-primary btn-outline"
                onClick={this.handleSubmit}><i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}
export default TodoForm;