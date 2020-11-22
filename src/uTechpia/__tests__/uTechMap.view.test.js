import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import UTechpiaView from '../UTechpia.view';

describe('UTechMap view', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<UTechpiaView />);
    expect(wrapper.find('WrapperStyled').exists()).toBeTruthy();
    expect(wrapper.find('WrapperContainerStyled').exists()).toBeTruthy();
  });
});
