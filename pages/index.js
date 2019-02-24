import React from 'react';

import { AppConsumer } from '../providers/AppProvider';

import GlobalStyle from '../components/GlobalStyle';
import Form from '../components/Form';
import Title from '../components/Title';

class Home extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Title>Simple github app</Title>
        <Form />
      </>
    );
  }
}

export default Home;
