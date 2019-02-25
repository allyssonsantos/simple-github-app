import styled from 'styled-components';
import Theme from '../Theme';

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Insert github username',
})`
  border: 1px solid ${Theme.colors.secondary};
  border-radius: 22px;
  font-size: ${props =>
    props.small ? Theme.font.size.small : Theme.font.size.medium};
  height: ${props => (props.small ? '14px' : '42px')};
  padding: ${Theme.spacing.padding.small};
`;

export default Input;
