import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';
import Container from '../components/Container';
import Form from '../components/Form';
import Title from '../components/Title';

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const Home = () => (
  <>
    <GlobalStyle />
    <StyledContainer>
      <Title size='xlarge'>Simple github app</Title>
      <Form />
    </StyledContainer>
  </>
);

export default Home;
