import React from 'react';

import { AppProps, Container } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
