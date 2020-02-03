import Venues from "../components/Venues";
import React from 'react';
import { mount } from 'enzyme';


test('Venues Component renders the venue and location inside it', () => {
  const venues = { key: 0, name: 'Smile Tiger Coffee Roasters', location: 'Kitchener' };
  const wrapper = mount(
    <Venues
      name={venues.name}
      location={venues.location}
    />
  );
  const p = wrapper.find('.venue-list');
  expect(p.text()).toBe('Kitchener');
});


