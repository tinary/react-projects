import ExploreForm from "../components/ExploreForm";
import React from 'react';
import { mount, shallow } from 'enzyme';


describe('when inputed name value and location', () => {
  it('should update form submitted state with button click', () => {
    const component = mount(<ExploreForm />);
    component
      .find('button')
      .simulate('click');

    // no sure compoenet.state
    expect(component.state('handleSubmit')).toEqual(true);
    component.unmount();
  });
});





// test('input interest edchanges the text after click', () => {
//   // Render a checkbox with label in the document
//   const input = shallow(<ExploreForm labelOn="On" labelOff="Off" />);

//   expect(input.text()).toEqual('Off');

//   input.find('input').simulate('change');

//   expect(input.text()).toEqual('On');
// });