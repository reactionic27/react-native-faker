import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Users} from '../../src/screens/Users';

describe('Users', () => {
  const initialState = {users: []};
  const mockStore = configureStore();
  let store: any;

  describe('rendering', () => {
    store = mockStore(initialState);
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <Users />
        </Provider>,
      );
    });

    it('should render a Users component', () => {
      expect(wrapper.find(Users)).toHaveLength(1);
    });
  });
});
