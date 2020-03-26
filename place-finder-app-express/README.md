# Place Finder App

## Summary

This Place Finder app will show nearby recommended places based on user's interest and location.
User can search by what they are looking for (ie. food, pub ..etc.) and a location to find a list of nearby recommended places.
If user don't know what they are looking for, they can search by their location and the app will show a list of recommended places in that area.

This app is created by using backend Express server that fetches data from Foursquare API, and a frontend React client that receives data from the backend.

The app is made with bootstrap 4 to create a dynamic and responsive user experience.


## How to run the application

Clone the project locally `/place-finder-app`

You will need `Node.js` installed on your computer

In order to run the application, you need two terminal windows opened. First, open a terminal window go into the project folder `/frontend` run `npm install`, then open another terminal window and go into `/backend` folder to `run npm install` to get the packages.

Go into `/backend` folder and type `node server.js` to start up the Express server, you will see [http://localhost:5000](http://localhost:5000) is waiting for connection to the frontend React. Then use another terminal window to go into `/frontend` folder and type `npm start` to launch the site. The application will be launched in [http://localhost:3000](http://localhost:3000)



## Application design

#### Frontend Components

1. **ExploreForm** Component : This Component is where the user inputs what they are looking for and location to find out a list of recommended places around that area. The form captures the data and posts it's value to a POST route in the backend. Once the data is received in the backend server, it will fetch to call the Foursquare API.

2. **VenuesDisplay** Component : This Component displays the list of recommended places based on the user's inputs from the form. It will fetch the data from the API through a GET route and validates the returned data and decides what to show on the page based on the data returned.

- Submit a form without any inputs will display an error message to ask you to try again the search.
- Submit a form with invalid data or data that can't be found in the API database query will display error message to ask you to try again the search.
- Submit a form with valid data will display a list of places and ask you to create new search if needed.

3. **Venues** Component : a function to structure all the places found with name and address to display in the view.

4. **App** Component : is the main parent component that organized all the child components.


#### Backend Server
**server.js** Express server setup for routing application.

**SearchLocationos.js** handles all the API calls and routes.





