import { Card, Col, Row } from 'antd';
import React from 'react';

interface Props {
  long_url: string;
  short_url: string;
}

const ResultCard: React.FC<Props> = ({ long_url, short_url }) => {
  return (
    <Card>
      <p>
        Long URL:{' '}
        <a href={long_url} target="_blank" rel="noreferrer">
          {long_url}
        </a>
      </p>
      <p>Short URL: <a href={short_url} target="_blank" rel="noreferrer">
        {short_url}
      </a></p>
    </Card>
  );
};

export default ResultCard;
