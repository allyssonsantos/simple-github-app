import React, { useState } from 'react';
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
            }}
          >
            <Input
              small={small}
              type='text'
              name='search'
              onChange={({ target: { value } }) => setValue(value)}
              value={value}
            />
          </form>
        );
      }}
    </AppConsumer>
  );
};

// class Form extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { value: '' };
//   }

//   handleChange = ({ target: { value } }) => this.setState({ value });

//   render() {
//     const { small } = this.props;

//     return (
//       <AppConsumer>
//         {context => {
//           const { searchUser } = context;
//           return (
//             <form
//               onSubmit={async e => {
//                 e.preventDefault();
//                 await searchUser(this.state.value);
//               }}
//             >
//               <Input
//                 small={small}
//                 type="text"
//                 name="search"
//                 onChange={this.handleChange}
//                 value={this.state.value}
//               />
//             </form>
//           );
//         }}
//       </AppConsumer>
//     );
//   }
// }

export default Form;
