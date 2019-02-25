import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import 'jest-styled-components';

const getReposWithContext = context => {
  jest.doMock('../../providers/AppProvider', () => {
    return {
      AppConsumer: props => props.children(context),
    };
  });

  return require('./index').default;
};

describe('Form component', () => {
  const context = {
    openRepo: jest.fn(),
    userInfo: { login: 'test' },
    repos: [
      {
        id: 1,
        name: 'test',
        description: 'test description',
        stargazers_count: 1,
        updated_at: '2019-01-14T04:08:31Z',
      },
    ],
  };

  describe('Snapshots', () => {
    it('Should match snapshot', () => {
      const Repo = getReposWithContext(context);
      const component = renderer.create(<Repo />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Context functions', () => {
    it('Should call openRepo from context', () => {
      const Repo = getReposWithContext(context);
      const wrapper = mount(<Repo />);

      expect(context.openRepo).toBeCalledTimes(0);

      wrapper.find('RepoCard').simulate('click');

      expect(context.openRepo).toBeCalledTimes(1);
    });
  });
});
