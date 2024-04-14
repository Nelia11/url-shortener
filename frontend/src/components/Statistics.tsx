import styled from 'styled-components';
import { Flex, GrayText } from './reusable/MyComponents';
import Card from './reusable/Card';
import recognition from '/icon-brand-recognition.svg';
import record from '/icon-detailed-records.svg';
import customization from '/icon-fully-customizable.svg';
import { useEffect, useState } from 'react';
import ShortenedLink from './reusable/ShortenedLink';
import axios from 'axios';
import ShortenLink from './reusable/ShortenLink';
import { v4 as uuidv4 } from 'uuid';

const Block = styled.div``;

const Layout = styled(Flex)`
  flex-direction: column;
  background-color: hsl(257, 7%, 93%);
  padding: 9rem 0;
  position: relative;
  margin-top: 8rem;
`;

const Text = styled.h3`
  font-weight: 700;
`;

const BlockWrap = styled(Flex)`
  flex-direction: column;
  max-width: 50rem;
  text-align: center;
  margin-top: 8rem;
`;

const CardsContainer = styled.div`
  display: flex;
  margin-top: 5rem;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const CardWrap = styled.div`
  margin: 0 1rem;
`;

const RecognitionWrap = styled(CardWrap)``;

const RecordsWrap = styled(CardWrap)`
  margin-top: 3rem;

  @media (max-width: 1200px) {
    margin-top: 5rem;
  }
`;
const CustomizableWrap = styled(CardWrap)`
  margin-top: 6rem;

  @media (max-width: 1200px) {
    margin-top: 5rem;
  }
`;

interface ShortenUrlResponse {
  status: number;
  data: {
    shortUrl: string;
    error: string | null;
  };
}

interface StoredLink {
  id: string;
  rawUrl: string;
  shortUrl: string;
}

const Statistics = () => {
  const [rawLink, setRawLink] = useState('');
  const [error, setError] = useState<null | string>(null);
  const [storedLinks, setStoredLinks] = useState<StoredLink[]>([]);

  const postUrl = async (url: string) => {
    try {
      const res: ShortenUrlResponse = await axios.post(
        'http://localhost:5000/shorten-url',
        {
          url,
        }
      );

      const { data, status } = res;

      if (status === 200) {
        const links = JSON.parse(sessionStorage.getItem('links') || '[]');
        links.push({ rawUrl: url, shortUrl: data.shortUrl, id: uuidv4() });
        sessionStorage.setItem('links', JSON.stringify(links));

        setStoredLinks(links);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!rawLink) {
      setError('Please add a link');
      return;
    }

    postUrl(rawLink);
    setRawLink('');
  };

  useEffect(() => {
    const links = JSON.parse(sessionStorage.getItem('links') || '[]');
    setStoredLinks(links);
  }, []);

  return (
    <Layout>
      <ShortenLink
        handleSubmit={handleSubmit}
        rawLink={rawLink}
        setRawLink={setRawLink}
        error={error}
        setError={setError}
      />
      {storedLinks.map((link: StoredLink) => (
        <ShortenedLink
          key={link.id}
          rawLink={link.rawUrl}
          shortenedLink={link.shortUrl}
        />
      ))}
      <BlockWrap>
        <Block>
          <Text>Advanced Statistics</Text>
        </Block>
        <Block>
          <GrayText>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </GrayText>
        </Block>
      </BlockWrap>
      <CardsContainer>
        <RecognitionWrap>
          <Card
            img={recognition}
            title='Brand recognition'
            content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
        </RecognitionWrap>
        <RecordsWrap>
          <Card
            img={record}
            title='Detailed Records'
            content='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
          />
        </RecordsWrap>
        <CustomizableWrap>
          <Card
            img={customization}
            title='Fully Customizable'
            content='Import brand awareness and content discoverability through customizable links, supercharging audience engagement.'
          />
        </CustomizableWrap>
      </CardsContainer>
    </Layout>
  );
};
export default Statistics;
