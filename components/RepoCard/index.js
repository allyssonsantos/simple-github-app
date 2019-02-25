import React, { Component } from 'react';
import styled from 'styled-components';

import { Header, Content, Footer } from './sub-components';

const StyledCard = styled.article`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 1px #000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
  padding: 10px;
`;

class RepoCard extends Component {
  constructor(props) {
    super(props);
  }

  static Header = Header;
  static Content = Content;
  static Footer = Footer;

  render() {
    const { children, onClick } = this.props;
    return <StyledCard onClick={onClick}>{children}</StyledCard>;
  }
}

RepoCard.displayName = 'RepoCard';
RepoCard.Header.displayName = 'RepoCard.Header';
RepoCard.Content.displayName = 'RepoCard.Content';
RepoCard.Footer.displayName = 'RepoCard.Footer';

export default RepoCard;
