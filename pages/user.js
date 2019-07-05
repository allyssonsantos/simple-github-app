import React from 'react';

import Container from '../components/Container';
import UserInfo from '../components/UserInfo';
import Repos from '../components/Repos';
import RightPanel from '../components/RightPanel';

const User = ({ username }) => (
  <Container>
    <UserInfo username={username} />
    <Repos />
    <RightPanel />
  </Container>
);

User.getInitialProps = async ({ query: { username } }) => {
  return { username };
};

export default User;
