import React from 'react';
import renderer from 'react-test-renderer';
import { expectCSSMatches } from './test.utils';
import GlobalStyle from './';

describe('GlobalStyle component', () => {
  it('Should add standard styles', () => {
    renderer.create(<GlobalStyle />);

    expectCSSMatches(`* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }`);
  });
});
