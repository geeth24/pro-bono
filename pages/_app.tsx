import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
      <>
          <Head>
              <title>Pro Bono</title>
              <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width"
              />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
              />
              <link
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                  rel="stylesheet"
              />
          </Head>

          <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                  /** Put your mantine theme override here */
                  colorScheme: "light",
                  fontFamily: "Inter, sans-serif",
                  fontSizes: {
                    xs: 18,
                  },
              }}
          >
              <Component {...pageProps} />
          </MantineProvider>
      </>
  )
}