import React, { useEffect, useState } from 'react';

import './index.less';
import ShortenerForm from '../components/home/ShortenerForm';
import { ShortenResponse } from '../api/types';
import { Col, Row } from 'antd';
import ResultCard from '../components/home/ResultCard';
import { useRouter } from 'next/dist/client/router';

const Home: React.FC = () => {
  const [results, setResults] = useState<{ long_url: string; hash: string }[]>([
    // { long_url: 'https://google.com', hash: 'asdausydiu' },
  ]);
  const [origin, setOrigin] = useState<string | undefined>(undefined);

  useEffect(() => {
    setOrigin(window.location.origin)
  })

  return (
    <div className="float">
      <div className="form-container">
        <ShortenerForm
          onCreated={(res: ShortenResponse) => {
            setResults((results) => results.concat(res));
          }}
        />
      </div>
      <div className="result-container">
        <Row gutter={[16, 16]} justify="center">
          {results.map((result) => (
            <Col span={20} md={8} lg={6} xxl={4}>
              <ResultCard long_url={result.long_url} short_url={`${origin}/${result.hash}`} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
