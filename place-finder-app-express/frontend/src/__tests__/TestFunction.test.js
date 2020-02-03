const TestFunction = require('../components/TestFunction');
//import TestFunction from './TestFunction';

test('User should be Brad Traversy object', () => {
  expect(TestFunction.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
});

// working with API async data
test('User fetched name should be Leanne Graham', () => {
  //expect.assertions(1);
  TestFunction.fetchUser()
  .then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});