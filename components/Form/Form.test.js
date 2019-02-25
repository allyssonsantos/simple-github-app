import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import 'jest-styled-components';

const getFormWithContext = context => {
  jest.doMock('../../providers/AppProvider', () => {
    return {
      AppConsumer: props => props.children(context),
    };
  });

  return require('./index').default;
};

describe('Form component', () => {
  const context = { searchUser: jest.fn() };

  describe('Snapshots', () => {
    it('Should match snapshot', () => {
      const Form = getFormWithContext(context);
      const component = renderer.create(<Form />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Context functions', () => {
    it('Should call searchUser from context', () => {
      const Form = getFormWithContext(context);
      const wrapper = mount(<Form />);

      expect(context.searchUser).toBeCalledTimes(0);

      wrapper.find('form').simulate('submit');

      expect(context.searchUser).toBeCalledTimes(1);
    });
  });

  describe('Change functions', () => {
    it('Should call onChange from input', () => {
      const Form = getFormWithContext(context);
      const wrapper = mount(<Form />);
      const newValue = 'new value';

      wrapper.find('input').simulate('change', { target: { value: newValue } });

      expect(wrapper.state().value).toBe(newValue);
    });
  });
});
