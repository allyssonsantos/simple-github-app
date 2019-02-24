import React from 'react';

import { AppConsumer } from '../../providers/AppProvider';

import Input from '../Input';
import Button from '../Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  handleChange = ({ target: { value } }) => this.setState({ value });

  render() {
    return (
      <AppConsumer>
        {context => {
          const { handleSubmit } = context;
          return (
            <form onSubmit={handleSubmit(this.state.value)}>
              <Input
                type="text"
                name="search"
                onChange={this.handleChange}
                value={this.state.value}
              />
              <Button>Search</Button>
            </form>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Form;
