import styled from 'styled-components';
import Theme from '../Theme';

const {
  colors: { secondary },
  font: {
    size: { small: smallFont, medium: mediumFont }
  },
  spacing: {
    padding: { small: smallPadding }
  }
} = Theme;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Insert github username'
})`
  border-radius: 22px;

  ${({ small: smallProp }) => `
    border: 1px solid ${secondary};
    font-size: ${smallProp ? smallFont : mediumFont};
    height: ${smallProp ? '14px' : '42px'};
    padding: ${smallPadding};
  `}
`;

export default Input;
