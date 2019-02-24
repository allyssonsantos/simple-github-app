import React, { Component } from 'react';
import styled from 'styled-components';

import { getUserData } from '../services/githubApi';
import { AppConsumer } from '../providers/AppProvider';

import Container from '../components/Container';
import Form from '../components/Form';
import Title from '../components/Title';
import RepoCard from '../components/RepoCard';

const Repos = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
`;

class User extends Component {
  render() {
    return (
      <Container>
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
                <Repos>
                  {repos.map(repo => {
                    return (
                      <RepoCard key={repo.id}>
                        <RepoCard.Header />
                        <RepoCard.Content />
                        <RepoCard.Footer />
                      </RepoCard>
                    );
                  })}
                </Repos>
              </>
            );
          }}
        </AppConsumer>
      </Container>
    );
  }
}

export default User;
