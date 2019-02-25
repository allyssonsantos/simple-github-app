import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Container from './';

describe('With Snapshot Testing', () => {
  it('Should match snapshot', () => {
    const component = renderer.create(<Container>Hello</Container>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
