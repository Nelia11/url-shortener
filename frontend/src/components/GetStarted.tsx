import styled from 'styled-components';
import { Flex, GrayText } from './reusable/MyComponents';
import ButtonCyan from './reusable/ButtonCyan';
import working from '/illustration-working.svg';

const Block = styled.div``;

const Section = styled(Flex)`
  max-width: 144rem;
  margin: auto auto;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const BoldText = styled.h2`
  font-weight: 700;
  font-size: 7rem;
`;

const DescriptionWrap = styled(Flex)`
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 3rem;

  & > * {
    margin: 1rem 0;
  }
`;

const Description = styled(GrayText)`
  font-weight: 500;
  font-size: 3rem;
`;

const SectionImage = styled.img`
  width: 80rem;
  @media (max-width: 1200px) {
    width: 40rem;
  }
  @media (max-width: 400px) {
    width: 30rem;
  }
`;

const GetStarted = () => {
  return (
    <Section>
      <DescriptionWrap>
        <BoldText>More than just shorter links</BoldText>
        <Block>
          <Description>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Description>
        </Block>
        <ButtonCyan text='Get Started' isRounded={true} />
      </DescriptionWrap>
      <SectionImage src={working} />
    </Section>
  );
};
export default GetStarted;
