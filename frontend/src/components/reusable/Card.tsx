import { FC } from 'react';
import styled from 'styled-components';
import { GrayText } from './MyComponents';

const Layout = styled.div`
  position: relative;
  width: 30rem;
  padding: 3rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const Block = styled.div`
  & > * {
    margin: 1rem 0;
  }
`;

const Title = styled.div`
  margin-top: 3rem;
  font-weight: 700;
`;

const Content = styled(GrayText)`
  font-weight: 500;
`;

const Circle = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  position: absolute;
  background-color: hsl(255, 11%, 22%);
  left: 2rem;
  top: -3rem;
`;

interface CardProps {
  img: string;
  title: string;
  content: string;
}

const Card: FC<CardProps> = ({ img, title, content }) => {
  return (
    <Layout>
      <Circle src={img} alt='icon' />
      <Block>
        <Title>{title}</Title>
        <Block>
          <Content>{content}</Content>
        </Block>
      </Block>
    </Layout>
  );
};
export default Card;
