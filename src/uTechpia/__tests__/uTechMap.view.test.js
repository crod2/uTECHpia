import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import UTechMapView from '../uTechMap.view';

describe('UTechMap view', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<UTechMapView />);
    expect(wrapper.find('WrapperStyled').exists()).toBeTruthy();
    expect(wrapper.find('WrapperContainerStyled').exists()).toBeTruthy();
  });
});
