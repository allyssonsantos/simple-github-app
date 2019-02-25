import App, { Container } from 'next/app';
import Head from 'next/head';
import AppProvider from '../providers/AppProvider';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </Container>
    );
  }
}

export default MyApp;
