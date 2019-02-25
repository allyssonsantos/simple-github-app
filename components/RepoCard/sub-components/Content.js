import styled from 'styled-components';

const Warning = styled.span`
  font-size: 12px;
  font-style: italic;
`;

const Content = ({ children }) => (
  <div>{children || <Warning>this repo don't have description</Warning>}</div>
);

export default Content;
