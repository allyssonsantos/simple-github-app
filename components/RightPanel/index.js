import React, { Component } from 'react';
import styled from 'styled-components';

import { AppConsumer } from '../../providers/AppProvider';

import Title from '../Title';
import Input from '../Input';
import Panel from '../Panel';
import Link from '../Link';
import List from '../List';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 1px #000;
  height: 100vh;
  max-width: 80%;
  position: fixed;
  top: 0;
  right: 0;
  overflow: auto;
  transform: translateX(100%);
  transform: ${props => props.opened && `translateX(0%)`};
  transition: transform 0.3s ease-in-out;
  will-change: transform;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: ${props => (props.visible ? 'block' : 'none')};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

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

const FilterCommits = (term, commits) =>
  term
    ? commits.filter(({ commit }) =>
        commit.message.toLowerCase().includes(term.toLowerCase())
      )
    : commits;

class RightPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    return (
      <AppConsumer>
        {context => {
          const {
            userInfo,
            selectedRepo,
            repos,
            commits,
            resetSelectedRepo,
            isAtBottom,
            incrementRepoCommits,
          } = context;
          const repository = repos.filter(repo => selectedRepo === repo.id)[0];
          const filteredCommits = FilterCommits(this.state.value, commits);
          return (
            <>
              <Overlay onClick={resetSelectedRepo} visible={selectedRepo} />
              <Wrapper
                opened={selectedRepo}
                onScroll={() => {
                  if (isAtBottom(this.wrapper) && selectedRepo) {
                    incrementRepoCommits(userInfo.login, repository.name);
                  }
                }}
                ref={wrapper => (this.wrapper = wrapper)}
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
                      <StyledTitle as="h3" size="medium">
                        Commits:
                      </StyledTitle>
                      <Input
                        small
                        onChange={this.handleChange}
                        value={this.state.value}
                        placeholder="Search commits"
                      />
                    </Actions>
                    <StyledList>
                      {filteredCommits.length ? (
                        filteredCommits.map(commit => {
                          return (
                            <List.Item key={commit.sha}>
                              <StyledLink
                                href={commit.html_url}
                                title={commit.commit.message}
                                target="_blank"
                              >
                                {commit.commit.message}
                              </StyledLink>
                              <UserName>
                                <Link
                                  href={commit.author && commit.author.html_url}
                                >
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
                  </Panel>
                )}
              </Wrapper>
            </>
          );
        }}
      </AppConsumer>
    );
  }
}

export default RightPanel;
