import styled from 'styled-components';

import { AppConsumer } from '../../providers/AppProvider';

import Title from '../Title';
import RepoCard from '../RepoCard';

const Wrapper = styled.div`
  border-top: 1px solid #ccc;
  margin-top: 20px;
  padding-top: 12px;
`;

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
`;

const Repos = () => (
  <Wrapper>
    <Title as="h3">Repositories</Title>
    <Grid>
      <AppConsumer>
        {context => {
          const {
            openRepo,
            userInfo: { login },
            repos,
          } = context;

          return repos.map(repo => {
            const {
              id,
              name,
              description,
              stargazers_count: stars,
              updated_at: updated,
            } = repo;

            return (
              <RepoCard
                key={id}
                onClick={async e => await openRepo(id, login, name)}
              >
                <RepoCard.Header>{name}</RepoCard.Header>
                <RepoCard.Content>{description}</RepoCard.Content>
                <RepoCard.Footer stars={stars} updated={updated} />
              </RepoCard>
            );
          });
        }}
      </AppConsumer>
    </Grid>
  </Wrapper>
);

export default Repos;
