import Title from '../../Title';

const Header = ({ children }) => (
  <header>
    <Title as="h2" size="small">
      {children}
    </Title>
  </header>
);

export default Header;
