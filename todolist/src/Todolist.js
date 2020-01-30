import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./Todolist.css";

class Todolist extends Component {
  constructor(props) {
    super(props);

    //store our item to the array, maintain the state
    this.state= {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    console.log("Key in deleteItems:" + key);
    console.log("Items at delete: " + this.state.items);
    var filtereditems = this.state.items.filter(function(item) {
      return (item.key !== key)
    });
    this.setState({
      items: filtereditems
    });
  }

  render() {
    return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={ this.addItem }>
          <input ref={(a) => this._inputElement = a }
              placeholder="enter task">
          </input>
          <button type="submit">Add</button>
        </form>
      </div>
      <TodoItems entries={this.state.items}
                  delete={this.deleteItem}>
      </TodoItems>
    </div>
    );
  }
}

export default Todolist;