import styled from 'styled-components';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: ${props => (props.visible ? 'block' : 'none')};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;

export default Overlay;
