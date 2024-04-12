import styled from 'styled-components';
import boost from '/bg-boost-desktop.svg';
import ButtonCyan from './ButtonCyan';
import React, { FC } from 'react';

const Container = styled.div`
  background-image: url(${boost});
  background-color: hsl(257, 27%, 26%);
  position: absolute;
  top: -7rem;
  max-width: 144rem;
  width: 100%;
  padding: 4rem 2rem;
  border-radius: 0.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  height: 5rem;
  border-radius: 0.5rem;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Block = styled.div`
  width: 75%;
`;

const TextRed = styled.span`
  color: red;
`;

interface SearchComponentProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  rawLink: string;
  setRawLink: (val: string) => void;
  error: null | string;
  setError: (val: null | string) => void;
}

const ShortenLink: FC<SearchComponentProps> = ({
  rawLink,
  setRawLink,
  handleSubmit,
  error,
  setError,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Block>
          <Input
            value={rawLink}
            onChange={(e) => setRawLink(e.target.value)}
            onFocus={() => setError(null)}
            placeholder='Shorten a link here...'
          />
        </Block>
        <ButtonCyan text='Shorten it!' isRounded={false} />
      </Form>
      {error && <TextRed>{error}</TextRed>}
    </Container>
  );
};
export default ShortenLink;
