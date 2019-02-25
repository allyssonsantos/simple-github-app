import fetch from 'isomorphic-unfetch';

const getGitHubApiUrl = (username, type, page = 1) => {
  const internalUser = username ? `/${username}` : '';
  const internalType = type ? `/${type}` : '';
  return `https://api.github.com/users${internalUser}${internalType}?page=${page}`;
};

const getUserData = async username => {
  const gitHubUrl = getGitHubApiUrl(username);
  const res = await fetch(gitHubUrl);
  const userInfo = await res.json();

  return userInfo;
};

const getUserRepos = async username => {
  const gitHubUrl = getGitHubApiUrl(username, 'repos');
  const res = await fetch(gitHubUrl);
  const userRepos = await res.json();

  return userRepos;
};

const getRepoCommits = async (username, reponame, page = 1) => {
  const res = await fetch(
    `https://api.github.com/repos/${username}/${reponame}/commits?page=${page}`
  );
  const commits = await res.json();

  return commits;
};

export { getGitHubApiUrl, getUserData, getUserRepos, getRepoCommits };
