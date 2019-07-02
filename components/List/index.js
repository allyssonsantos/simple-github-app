import React from 'react';
import styled from 'styled-components';

import Item from './sub-components/Item';

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const List = ({ children, ...rest }) => (
  <StyledUl {...rest}>{children}</StyledUl>
);

List.Item = Item;

export default List;
