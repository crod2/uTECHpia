import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import UTechMap from '../uTechMap.component';

describe('UTechMap component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<UTechMap />);
    expect(wrapper.find('div').exists()).toBeTruthy();
  });
});
