import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('Create new search send to home page renders correctly', () => {
  const tree = renderer
    .create(<Link page="/">Create new search</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});



xit('Handles non-400 error', () => {

});

xit('Error is "400" not 400', () => {

});




/*
What if...
- No results?
- Multiple results?
- Error?
- Loading?
- Non-400 error
- Error is "400" not 400

https://www.npmjs.com/package/jest-fetch-mock
*/