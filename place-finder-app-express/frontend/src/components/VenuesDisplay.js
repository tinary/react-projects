import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Venues from './Venues';
import { Link } from 'react-router-dom';


class VenuesDisplay extends Component {
  state = {
    isLoading: true,
    venues: [],
    venueNotFound: ''
  };

  componentDidMount() {
    fetch('/search-venues')
      .then(response => response.json())
      .then(data => {
        if (data.data.meta.code === 400) {
          this.setState({
            isLoading: false,
            venueNotFound: '400'
          });
        }
        else {
          this.setState({ venues: data.data.response.groups[0].items, isLoading: false });
        }
      })
      .catch(err => {
        console.log(err);
      })
  };


  renderVenueList() {
    return this.state.venues.map((item, i) =>
      <Venues
        key={i}
        name={item.venue.name}
        location={item.venue.location.formattedAddress}
      />
    );
  };



  render() {

    const ResultFoundError = (
      <Container id="venue-error" className="text-center p-5">
        <div className="search">
          <p> Whoa! The places you're looking for can't be found.</p>
          <Link to='/'>
            <button className="btn btn-primary btn-outline">Try Again</button>
          </Link>
        </div>
      </Container>
    )

    const VenuesResult = (
      this.state.venueNotFound === '400' ? <div> {ResultFoundError} </div> :
        <div>
          <h1 className="m-3 pb-5">Places to go...</h1>

          {this.renderVenueList()}

          <div className="pt-5">
            <Link to='/'>
              <button className="btn btn-primary btn-outline">Create new search</button>
            </Link>
          </div>
        </div>
    )

    const VenueList = (
      this.state.isLoading === true ?
        <div className="search"> <h1 className="m-3">Loading...</h1> </div> :
        <div> {VenuesResult} </div>
    )

    return (
      <div>
        <Container id="search-form" className="text-center p-5">
          {VenueList}
        </Container>
      </div>
    )
  }
}

export default VenuesDisplay;