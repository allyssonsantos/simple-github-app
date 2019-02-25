import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Panel from './';

describe('With Snapshot Testing', () => {
  it('Should match snapshot without compound components children', () => {
    const component = renderer.create(<Panel>This is a Panel</Panel>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match snapshot Header, Stars and Title children components', () => {
    const PanelComponent = () => (
      <Panel>
        <Panel.Header>
          <Panel.Title>Title</Panel.Title>
          <Panel.Stars>Stars</Panel.Stars>
        </Panel.Header>
      </Panel>
    );
    const component = renderer.create(<PanelComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
