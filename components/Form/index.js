import React, { useState } from 'react';
import Router from 'next/router';

import { AppConsumer } from '../../providers/AppProvider';
import Input from '../Input';

const Form = ({ small }) => {
  const [value, setValue] = useState('');

  return (
    <AppConsumer>
      {context => {
        const { searchUser } = context;
        return (
          <form
            onSubmit={async e => {
              e.preventDefault();
              await searchUser(value);
              Router.push(`/user?username=${value}`);
            }}
          >
            <Input
              small={small}
              type="text"
              name="search"
              onChange={({ target: { value } }) => setValue(value)}
              value={value}
            />
          </form>
        );
      }}
    </AppConsumer>
  );
};

export default Form;
