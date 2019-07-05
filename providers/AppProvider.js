import React from 'react';
import Router from 'next/router';
import {
  getUserData,
  getUserRepos,
  getRepoCommits,
} from '../services/githubApi';

const AppContext = React.createContext({
  userinfo: {},
  repos: [],
  commits: [],
  selectedRepo: null,
  nextCommitPage: 2,
  hasMore: true,
});

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
      repos: [],
      commits: [],
      selectedRepo: null,
      nextCommitPage: 2,
      hasMore: true,
    };
  }

  setUserInfo = userInfo => {
    this.setState({ userInfo });
  };

  setUserRepos = repos => {
    this.setState({ repos });
  };

  setSelectedRepo = id => {
    this.setState({ selectedRepo: id });
  };

  setRepoCommits = commits => {
    this.setState({ commits });
  };

  incrementRepoCommits = async (username, reponame) => {
    if (!this.state.hasMore) {
      return false;
    }

    const newCommits = await getRepoCommits(
      username,
      reponame,
      this.state.nextCommitPage
    );

    if (!newCommits.length) {
      return this.setState({ hasMore: false });
    }

    this.setState({ commits: [...this.state.commits, ...newCommits] }, () => {
      this.incrementCommitPage();
    });
  };

  incrementCommitPage = () =>
    this.setState({ nextCommitPage: this.state.nextCommitPage + 1 });

  isAtBottom = element =>
    element.scrollTop >= element.scrollHeight - element.offsetHeight;

  resetSelectedRepo = () => {
    this.setState({
      selectedRepo: null,
      commits: [],
      nextCommitPage: 2,
      hasMore: true,
    });
  };

  openRepo = async (id, username, reponame) => {
    const commits = await getRepoCommits(username, reponame);
    this.setSelectedRepo(id);
    this.setRepoCommits(commits);
  };

  searchUser = async username => {
    const userInfo = await getUserData(username);
    const reposInfo = await getUserRepos(username);

    this.setUserInfo(userInfo);
    this.setUserRepos(reposInfo);
  };

  render() {
    const {
      setUserInfo,
      setUserRepos,
      searchUser,
      setSelectedRepo,
      openRepo,
      resetSelectedRepo,
      incrementRepoCommits,
      isAtBottom,
    } = this;
    const { children } = this.props;

    const value = {
      ...this.state,
      setUserInfo,
      setUserRepos,
      searchUser,
      setSelectedRepo,
      openRepo,
      resetSelectedRepo,
      incrementRepoCommits,
      isAtBottom,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  }
}

const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer };
