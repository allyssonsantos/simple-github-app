import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { AppConsumer } from '../../providers/AppProvider';
import { Wrapper, Overlay } from './sub-components';

import { Title, Input, Panel, Link, List } from '../';

const StyledList = styled(List)`
  padding: 0 10px;

  ${List.Item} {
    align-items: center;
    border-bottom: 1px solid #ccc;
    display: flex;
    padding: 10px;
  }
`;
const StyledTitle = styled(Title)`
  margin: 0;
`;

const UserName = styled.span`
  color: #666;
  font-size: 14px;
  font-style: italic;
  font-weight: bold;
  margin-left: 10px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Actions = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const filterCommits = (term, commits) =>
  term
    ? commits.filter(({ commit }) =>
        commit.message.toLowerCase().includes(term.toLowerCase())
      )
    : commits;

const commitsList = commits => (
  <StyledList>
    {commits.length ? (
      commits.map(commit => {
        return (
          <List.Item key={commit.sha}>
            <StyledLink
              href={commit.html_url}
              title={commit.commit.message}
              target='_blank'
            >
              {commit.commit.message}
            </StyledLink>
            <UserName>
              <Link href={commit.author && commit.author.html_url}>
                {commit.author && commit.author.login}
              </Link>
            </UserName>
          </List.Item>
        );
      })
    ) : (
      <span>This git repository do not have commits yet</span>
    )}
  </StyledList>
);

const RightPanel = () => {
  const [value, setValue] = useState('');
  const wrapperRef = useRef(null);

  return (
    <AppConsumer>
      {({
        userInfo,
        selectedRepo,
        repos,
        commits,
        resetSelectedRepo,
        isAtBottom,
        incrementRepoCommits
      }) => {
        const repository = repos.filter(repo => selectedRepo === repo.id)[0];
        const filteredCommits = filterCommits(value, commits);

        return (
          <>
            <Overlay onClick={resetSelectedRepo} visible={selectedRepo} />
            <Wrapper
              opened={selectedRepo}
              onScroll={() => {
                if (isAtBottom(wrapperRef.current) && selectedRepo) {
                  incrementRepoCommits(userInfo.login, repository.name);
                }
              }}
              ref={wrapperRef}
            >
              {selectedRepo && (
                <Panel>
                  <Panel.Header>
                    <Panel.Title>{repository.name}</Panel.Title>
                    <Panel.Stars>
                      Stars: {repository.stargazers_count}
                    </Panel.Stars>
                  </Panel.Header>
                  <Actions>
                    <StyledTitle as='h3' size='medium'>
                      Commits:
                    </StyledTitle>
                    <Input
                      small
                      onChange={({ target: { value } }) => setValue(value)}
                      value={value}
                      placeholder='Search commits'
                    />
                  </Actions>
                  {commitsList(filteredCommits)}
                </Panel>
              )}
            </Wrapper>
          </>
        );
      }}
    </AppConsumer>
  );
};

export default RightPanel;
