import styled from 'styled-components';
import AppContext from '../../providers/AppContext';

const StyledButton = styled.button``;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
