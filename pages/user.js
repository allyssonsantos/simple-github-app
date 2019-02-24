import React, { Component } from 'react';

import Form from '../components/Form';

import { getUserData } from '../services/githubApi';
import { AppConsumer } from '../providers/AppProvider';

import Title from '../components/Title';
import RepoCard from '../components/RepoCard';
import RightPanel from '../components/RightPanel';

class User extends Component {
  render() {
    return (
      <AppConsumer>
        {context => {
          console.log(context);
          const {
            userInfo: { name },
            repos,
          } = context;
          return (
            <>
              <Form />
              <Title>{name}</Title>
              {repos.map(repo => {
                return (
                  <RepoCard key={repo.id}>
                    <RepoCard.Header />
                    <RepoCard.Content />
                    <RepoCard.Footer />
                  </RepoCard>
                );
              })}
              <RightPanel />
            </>
          );
        }}
      </AppConsumer>
    );
  }
}

export default User;
