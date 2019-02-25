import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const Stars = styled.span``;
const Updated = styled.span``;

Updated.displayName = 'Updated';

const Footer = ({ stars, updated }) => {
  const date = new Date(updated);
  const dateHelper = date => (date ? ('0' + date).slice(-2) : '');
  return (
    <Wrapper>
      <Stars>Stars: {stars}</Stars>
      <Updated>
        Last update: {dateHelper(date.getMonth() + 1)}/
        {dateHelper(date.getDate())}/{date.getFullYear() || ''}
      </Updated>
    </Wrapper>
  );
};

export default Footer;
