import React, { Component } from 'react';



class ExploreForm extends Component {
  state = {
    value: "",
    location: ""
  };


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.value,
      this.state.location
    );
  }



  render() {

    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input name="value" type="text" className="form-control" placeholder="I'm Looking for"
                value={this.state.value} onChange={this.handleChange}>
              </input>
              <input name="location" type="text" className="form-control" placeholder="City"
                value={this.state.location} onChange={this.handleChange}>
              </input>
              <div className="input-group-append">
                <button type="button" className="btn btn-primary btn-outline"
                  onClick={this.handleSubmit}><i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}
export default ExploreForm;