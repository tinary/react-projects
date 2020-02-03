import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('Create new search send to home plage renders correctly', () => {
  const tree = renderer
    .create(<Link page="/">Create new search</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});