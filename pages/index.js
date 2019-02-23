import React from 'react';
import styled from 'styled-components';

import AppContext from '../providers/AppContext';

import Input from '../components/Input';
import Button from '../components/Button';

const Home = () => (
  <AppContext.Provider>
    <Input />
    <Button>Search</Button>
  </AppContext.Provider>
);

export default Home;
