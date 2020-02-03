import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


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
  };

  handleRemove = (event) => {
    this.props.onSubmit(
      this.state.value = "",
      this.state.location = ""
    );
  };


  render() {

    return (
      <Container id="search-form" className="text-center p-5">
        <h1 className="m-3">Find Places</h1>
        <Row className="m-5 mx-auto">
          <div className="mx-auto">
            <form onSubmit={this.handleSubmit} className="input-group">
              <Col md="auto p-2">
                <input name="value" type="text" className="form-control" placeholder="I'm Looking for"
                  value={this.state.value} onChange={this.handleChange}>
                </input>
              </Col>
              <Col md="auto p-2">
                <input name="location" type="text" className="form-control" placeholder="City"
                  value={this.state.location} onChange={this.handleChange}>
                </input>
              </Col>
              <Col md="auto p-2">
                <button type="button" className="btn btn-primary btn-outline"
                  onClick={this.handleSubmit}>Search
                </button>
                <button type="button" className="btn btn-primary btn-outline"
                  style={{ marginLeft: 10 }}
                  onClick={this.handleRemove}>Cancel
                </button>
              </Col>
            </form>
          </div>
        </Row>
      </Container>
    );
  }
}
export default ExploreForm;