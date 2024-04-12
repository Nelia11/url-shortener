import styled from 'styled-components';
import boost from '/bg-boost-desktop.svg';
import ButtonCyan from './reusable/ButtonCyan';

const Container = styled.div`
  background-image: url(${boost});
  background-color: hsl(257, 27%, 26%);
  height: 20rem;
`;

const WhiteText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 5rem;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  & > * {
    margin: 1rem;
  }
`;

const Block = styled.div``;

const BoostToday = () => {
  return (
    <Container>
      <FlexColumn>
        <Block>
          <WhiteText>Boost your links today</WhiteText>
        </Block>
        <ButtonCyan isRounded={true} text='Get Started' />
      </FlexColumn>
    </Container>
  );
};
export default BoostToday;
