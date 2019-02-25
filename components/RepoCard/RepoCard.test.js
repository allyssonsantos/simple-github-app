import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import RepoCard from './';

describe('<RepoCard />', () => {
  describe('With Snapshot Testing', () => {
    it('Should match snapshot without compound components children', () => {
      const component = renderer.create(
        <RepoCard>This is a RepoCard</RepoCard>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Should match snapshot Header, Content and Footer children components', () => {
      const PanelComponent = () => (
        <RepoCard>
          <RepoCard.Header>Header</RepoCard.Header>
          <RepoCard.Content>Content</RepoCard.Content>
          <RepoCard.Footer stars="10" updated="">
            Footer
          </RepoCard.Footer>
        </RepoCard>
      );
      const component = renderer.create(<PanelComponent />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Date function', () => {
    it('Should <RepoCard.Footer> format correct date', () => {
      const component = shallow(
        <RepoCard.Footer updated="2019-01-08T10:50:21Z" />
      );
      const expectedFormatedDate = 'Last update: 01/08/2019';
      expect(component.find('Updated').text()).toBe(expectedFormatedDate);
    });
  });
});
