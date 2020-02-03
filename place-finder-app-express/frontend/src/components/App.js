import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';
import ExploreForm from './ExploreForm';
import Venues from './Venues';


class App extends Component {
  state = {
    isLoading: true,
    venues: [],
    userLocation: ""
  };

  // componentDidMount() {
  //   this.getVenues()
  // };

  // Location Sever:
  // getLocation = () => {
  //   navigator.geolocation.getCurrentPosition(response => {
  //     this.setState({
  //       userLocation: response.coords.latitude + "," + response.coords.longitude
  //     }, () => {
  //       this.getVenues()
  //     });
  //   });
  // };


  getVenues = (query, location) => {
    const venuesEndpoint = 'https://api.foursquare.com/v2/venues/explore?';
    const params = {
      client_id: 'FUGDM4MRQANAFZVXYTH1L5MD5FEIYU1TGVDJ5EQCVG3JDTJH',
      client_secret: 'RGV0QY4P4P3EQ1APFW3Y5TBNZWS5H2K0SPT2QR3DNJYR4AW4',
      //ll: this.state.userLocation,
      query: query,
      near: location,
      v: '20200101'
    };
    // console.log("query: " + query);
    // console.log("near: " + location);

    axios.get(venuesEndpoint + new URLSearchParams(params), {
    }).then(response => {
      this.setState({ isLoading: false, venues: [] });
      if (response.data.response.groups[0].items !== undefined) {
        //{console.log(result.response.groups[0].items)}
        this.setState({ venues: response.data.response.groups[0].items })
      }
    }).catch((error) => {
      this.setState({ isLoading: false, venues: [] });
    });
  };


  handleSubmit = (query, location) => {
    this.getVenues(query, location)
  };


  renderVenueList() {
    if (this.state.isLoading === false) {
      if (this.state.venues.length > 0) {
        return this.state.venues.map((item, i) =>
          <Venues
            key={i}
            name={item.venue.name}
            location={item.venue.location.formattedAddress}
          />
        );
      }
      else {
        return <h3>No Result Found</h3>
      }
    }
    else {
      return <h3>Where to go...</h3>
    }
  };


  render() {

    return (
      <div>
        <ExploreForm
          onSubmit={this.handleSubmit}
        />
        <Container id="venue-list" className="text-center">
          {this.renderVenueList()}
        </Container >
      </div>
    );
  }
}

export default App;