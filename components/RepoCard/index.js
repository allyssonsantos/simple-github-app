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

const RepoCard = ({ children, onClick, ...rest }) => (
  <StyledCard onClick={onClick} {...rest}>
    {children}
  </StyledCard>
);

RepoCard.Header = Header;
RepoCard.Content = Content;
RepoCard.Footer = Footer;

RepoCard.displayName = 'RepoCard';
RepoCard.Header.displayName = 'RepoCard.Header';
RepoCard.Content.displayName = 'RepoCard.Content';
RepoCard.Footer.displayName = 'RepoCard.Footer';

export default RepoCard;
