import React from 'react';
import Router from 'next/router';
import { getUserData, getUserRepos } from '../services/githubApi';

const AppContext = React.createContext({
  githubApiUrl: '',
  userinfo: {},
  repos: [],
});

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
      repos: [],
    };
  }

  setUserInfo = userInfo => {
    this.setState({ userInfo });
  };

  setUserRepos = repos => {
    this.setState({ repos });
  };

  handleSubmit = username => async e => {
    e.preventDefault();
    const userInfo = await getUserData(username);
    const reposInfo = await getUserRepos(username);

    this.setUserInfo(userInfo);
    this.setUserRepos(reposInfo);
    Router.push('/user');
  };

  render() {
    const { setUserInfo, setUserRepos, handleSubmit } = this;
    const { children } = this.props;

    const value = {
      ...this.state,
      setUserInfo,
      setUserRepos,
      handleSubmit,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  }
}

const AppConsumer = AppContext.Consumer;

export default AppProvider;
export { AppConsumer };
