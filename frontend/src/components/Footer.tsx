import logoWhite from '/logo-white.svg';
import styled from 'styled-components';
import facebook from '/icon-facebook.svg';
import twitter from '/icon-twitter.svg';
import pinterest from '/icon-pinterest.svg';
import instagram from '/icon-instagram.svg';

const FooterContainer = styled.footer`
  background-color: hsl(255, 11%, 22%);
  margin-top: auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 4rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  margin: 0 4rem;
`;

const Block = styled.div`
  padding: 0 3rem;
  width: 20rem;
`;

const Title = styled.div`
  color: white;
  font-weight: 700;
  font-size: 3rem;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: hsl(180, 66%, 49%);
  }
`;

const SocialLinksList = styled.div`
  display: flex;
`;

const SocialListItem = styled.img`
  height: 4rem;
  margin: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Flex>
        <Image src={logoWhite} alt='logo' />
        <Block>
          <Title>Features</Title>
          <List>
            <ListItem>Link Shortening</ListItem>
            <ListItem>Branded Links</ListItem>
            <ListItem>Analytics</ListItem>
          </List>
        </Block>
        <Block>
          <Title>Resources</Title>
          <List>
            <ListItem>Blog</ListItem>
            <ListItem>Developers</ListItem>
            <ListItem>Support</ListItem>
          </List>
        </Block>
        <Block>
          <Title>Company</Title>
          <List>
            <ListItem>About</ListItem>
            <ListItem>Our Team</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Block>
        <SocialLinksList>
          <SocialListItem src={facebook} alt='facebook-icon' />
          <SocialListItem src={twitter} alt='twitter-icon' />
          <SocialListItem src={pinterest} alt='pinterest-icon' />
          <SocialListItem src={instagram} alt='instagram-icon' />
        </SocialLinksList>
      </Flex>
    </FooterContainer>
  );
};
export default Footer;
