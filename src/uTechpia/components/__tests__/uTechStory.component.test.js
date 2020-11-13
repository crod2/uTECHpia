import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import UTechStory from '../uTechStory.component';

describe('UTechStory component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<UTechStory />);
    expect(wrapper.find('WrapperStyled').exists()).toBeTruthy();
    expect(wrapper.find('WrapperContainerStyled').exists()).toBeTruthy();
  });
});
