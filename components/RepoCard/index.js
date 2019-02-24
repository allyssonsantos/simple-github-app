import React, { Component } from 'react';
import styled from 'styled-components';

import { Header, Content, Footer } from './sub-components';

const StyledCard = styled.section`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 1px #000;
  max-width: 300px;
  min-height: 300px;
`;

class RepoCard extends Component {
  constructor(props) {
    super(props);
  }

  static Header = Header;
  static Content = Content;
  static Footer = Footer;

  render() {
    const { children } = this.props;
    return <StyledCard>{children}</StyledCard>;
  }
}

export default RepoCard;
