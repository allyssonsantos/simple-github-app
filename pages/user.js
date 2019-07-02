import React, { Component } from 'react';

import Container from '../components/Container';
import UserInfo from '../components/UserInfo';
import Repos from '../components/Repos';
import RightPanel from '../components/RightPanel';

const User = () => (
  <Container>
    <UserInfo />
    <Repos />
    <RightPanel />
  </Container>
);

export default User;
