import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import List from './';

describe('With Snapshot Testing', () => {
  it('Should match snapshot without children', () => {
    const component = renderer.create(<List />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match snapshot with childrens', () => {
    const ListComponent = () => (
      <List>
        <List.Item>First Item</List.Item>
        <List.Item>Second Item</List.Item>
      </List>
    );
    const component = renderer.create(<ListComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
