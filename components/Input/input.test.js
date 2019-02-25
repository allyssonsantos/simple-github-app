import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from './';

describe('With Snapshot Testing', () => {
  it('Should match snapshot without props', () => {
    const component = renderer.create(<Input />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match snapshot with small prop', () => {
    const component = renderer.create(<Input small />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
