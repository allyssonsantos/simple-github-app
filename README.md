# Simple github app

This project is a simple front-end application that show infos about users in github, it shows:

- Username
- Userinfo
  - Company
  - Location
  - Email
  - Website
- Repositories
  - Commits
  - Stars
  - Last Update

It uses github REST api to fetch data.

This project is maded with:

- NextJs
- Styled-components
- Context API to manage data
- Jest with Enzyme to unit tests

## Setup

First clone this repo:

```shell
git clone git@github.com:allyssonsantos/simple-github-app.git
```

Install dependencies:

```shell
yarn
// or
npm install
```

## Development

Run

```shell
yarn dev
```

Then your application will be running at port `3000`;

## Build

To generate the build files just run:

```shell
yarn build
```

The build files will be at `build` folder.

To start the application from the generated build, just run:

```shell
yarn start
```

## Tests

To run tests:

```
yarn test
```

## Things to improve

- Needs a refactor in `RightPanel` component;
- Refactor github service file to handle the api url;
- Find a way to use enzyme with `<ThemeProvider />` to be able to use `ThemeProvider` on this app;
- Fetch data from GitHub on users page, right now is only able to fetch user information through the initial page, if you refresh, boom.
- Make more tests;
