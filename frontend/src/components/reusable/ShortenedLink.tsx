import styled from 'styled-components';
import { FC, useEffect, useState } from 'react';
import { Flex } from './MyComponents';
import ClipboardJS from 'clipboard';
import ButtonCopy from './ButtonCopy';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  width: 100%;
  max-width: 144rem;
  padding: 3rem;
  background-color: white;
  margin: 2rem;
  border-radius: 0.5rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Block = styled.div`
  background-color: white;
`;

const RawLink = styled.span`
  color: black;
`;

const ShortLink = styled.div`
  color: hsl(180, 66%, 49%);
  margin: 0 2rem;
`;

interface ShortenedLinkProps {
  rawLink: string;
  shortenedLink: string;
}

const ShortenedLink: FC<ShortenedLinkProps> = ({ rawLink, shortenedLink }) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const clipboard = new ClipboardJS('.copy');

    return () => {
      clipboard.destroy();
    };
  }, []);

  const handleCopyButtonClick = () => {
    setCopied(true);
  };

  return (
    <Container>
      <Block>
        <RawLink>{rawLink}</RawLink>
      </Block>
      <Flex>
        <Block>
          <ShortLink>{shortenedLink}</ShortLink>
        </Block>
        <div className='copy' data-clipboard-text={shortenedLink}>
          <ButtonCopy
            handleCopyButtonClick={handleCopyButtonClick}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            isClicked={copied}
          />
        </div>
      </Flex>
    </Container>
  );
};
export default ShortenedLink;
