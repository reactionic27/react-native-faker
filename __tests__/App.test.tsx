import App from '../App';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';

import {LoadingSpinner} from '../src/components/LoadingSpinner';

describe('App', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('should render a <LoadingSpinner />', () => {
      expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
    });
  });
});
