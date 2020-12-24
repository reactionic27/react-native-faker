import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {View} from 'react-native';
import {Header} from '../../src/components/Header';

const createTestProps = (props: Object) => ({
  ...props,
});

describe('Header', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<Header title="Test Title" />);
    });

    it('should render a View', () => {
      expect(wrapper.find(View)).toHaveLength(1);
    });
  });
});
