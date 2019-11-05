import React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/components/Home';

describe('Home Component', () => {
  it('renders Home', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
