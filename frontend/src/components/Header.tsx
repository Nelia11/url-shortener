import styled from 'styled-components';
import logo from '/logo.svg';
import ButtonCyan from './reusable/ButtonCyan';
import { Flex, GrayText } from './reusable/MyComponents';

const HeaderWrap = styled(Flex)`
  flex-wrap: wrap;
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled.img`
  margin-right: 1rem;
`;

const LogoLinksWrap = styled(Flex)`
  align-items: center;

  & > * {
    margin: 1rem;
  }

  & > *:first-child {
    margin: 0;
  }
`;

const Link = styled(GrayText)`
  &:hover {
    color: black;
  }
`;

const ButtonsWrap = styled.div`
  & > * {
    margin: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <LogoLinksWrap>
        <Logo src={logo} alt='logo' />
        <Link>Features</Link>
        <Link>Pricing</Link>
        <Link>Resources</Link>
      </LogoLinksWrap>
      <ButtonsWrap>
        <GrayText>Login</GrayText>
        <ButtonCyan text='Sign Up' isRounded={true} />
      </ButtonsWrap>
    </HeaderWrap>
  );
};
export default Header;
