import App, { Container } from 'next/app';
import AppProvider from '../providers/AppProvider';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </Container>
    );
  }
}

export default MyApp;
