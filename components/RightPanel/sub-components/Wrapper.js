import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 1px #000;
  height: 100vh;
  max-width: 80%;
  position: fixed;
  top: 0;
  right: 0;
  overflow: auto;
  transform: translateX(100%);
  transform: ${props => props.opened && `translateX(0%)`};
  transition: transform 0.3s ease-in-out;
  will-change: transform;
`;

export default Wrapper;
