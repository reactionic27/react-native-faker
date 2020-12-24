import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {LoadingSpinner} from '../../src/components/LoadingSpinner';

describe('LoadingSpinner', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<LoadingSpinner />);
    });

    it('should render a SafeAreaView', () => {
      expect(wrapper.find(SafeAreaView)).toHaveLength(1);
    });
  });
});
