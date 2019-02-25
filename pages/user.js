import React, { Component } from 'react';

import Container from '../components/Container';
import UserInfo from '../components/UserInfo';
import Repos from '../components/Repos';
import RightPanel from '../components/RightPanel';

class User extends Component {
  render() {
    return (
      <Container>
        <UserInfo />
        <Repos />
        <RightPanel />
      </Container>
    );
  }
}

export default User;
