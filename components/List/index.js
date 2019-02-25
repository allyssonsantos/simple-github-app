import React, { Component } from 'react';
import styled from 'styled-components';

import Item from './sub-components/Item';

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

class List extends Component {
  constructor(props) {
    super(props);
  }

  static Item = Item;

  render() {
    const { children, ...rest } = this.props;
    return <StyledUl {...rest}>{children}</StyledUl>;
  }
}

export default List;
