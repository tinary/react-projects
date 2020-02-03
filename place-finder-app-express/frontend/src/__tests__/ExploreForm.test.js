import ExploreForm from "../components/ExploreForm";
import React from 'react';
import { mount, shallow } from 'enzyme';


describe('when inputed name value and location', () => {
  it('should update form with button click', () => {
    const component = mount(<ExploreForm />);
    component
      .find('button')
      .simulate('click');

    expect(component.state('isLoading')).toEqual(true);
    component.unmount();
  });
});


