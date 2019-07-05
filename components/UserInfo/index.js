import styled from 'styled-components';

import { AppConsumer } from '../../providers/AppProvider';

import Title from '../Title';
import List from '../List';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'image name'
    'image infos';
  grid-template-columns: 110px 1fr;
  grid-template-rows: 35px 1fr;
  column-gap: 10px;
  margin: 10px 0;
`;

const Image = styled.img`
  grid-area: image;
  width: 110px;
  border: 1px solid #e1e4e8;
  border-radius: 4px;
`;

const StyledList = styled(List)`
  font-size: 14px;
  grid-area: infos;
`;

const UserInfo = ({ username }) => {
  return (
    <Wrapper>
      <AppConsumer>
        {context => {
          const { userInfo, searchUser } = context;
          if (!Object.keys(userInfo).length) {
            searchUser(username);
          }

          const { avatar_url, name, company, location, email, blog } = userInfo;

          return (
            <>
              <Image src={avatar_url} />
              <Title size="small">{name}</Title>
              <StyledList>
                <List.Item>Work at: {company}</List.Item>
                <List.Item>From: {location}</List.Item>
                <List.Item>Email: {email}</List.Item>
                <List.Item>Website: {blog}</List.Item>
              </StyledList>
            </>
          );
        }}
      </AppConsumer>
    </Wrapper>
  );
};

export default UserInfo;
