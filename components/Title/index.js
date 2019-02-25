import styled from 'styled-components';
import Theme from '../Theme';

const Title = styled.h1`
  color: ${props => Theme.colors.primary};
  font-size: ${props => Theme.font.size[props.size] || 'inherit'};
  margin: 0;
  margin-bottom: 10px;
`;

export default Title;
