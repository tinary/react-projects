import React, { Component } from 'react';
import { Input } from 'reactstrap';

class TodoList extends Component {


  render() {
    return (
    <div className="todoListMain">
      <div className="header">
        <form>
          <input type="text" className="form-control" placeholder="enter task">
          </input>
          <button type="button" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
    );
  }

}
export default TodoList;