import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';


test('renders without crashing', () => {
  //const div = document.createElement('div');
  const id = document.getElementById('app')
  ReactDOM.render(<App />, id);
});
