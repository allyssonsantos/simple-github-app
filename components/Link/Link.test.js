import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Link from './';

describe('With Snapshot Testing', () => {
  it('Should match snapshot', () => {
    const component = renderer.create(<Link>This is a link</Link>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
