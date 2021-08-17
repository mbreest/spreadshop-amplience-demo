import React from 'react';
import Head from 'next/head';

import 'styles/index.css';
import 'swiper/swiper.min.css';
import { PreviewBanner } from 'components/preview-banner';
import { LocaleContext } from 'lib/translations';

function SpreadshopApp({ Component, pageProps }) {
  const { locale, ...otherPageProps } = pageProps;

  return (
    <LocaleContext.Provider value={locale}>
      <div className="flex flex-col bg-white">
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/ico" />
          <link rel="apple-touch-icon" href="/favicon/spreadshop-favicon.png" type="image/png" />
          <meta
            name="description"
            content={`Spreadshop Amplience Website Demo`}
            key="description"
          />
        </Head>
        <PreviewBanner />
        <div className="w-full flex flex-col relative">
          <Component {...otherPageProps} />
        </div>
      </div>
    </LocaleContext.Provider>
  );
}

export default SpreadshopApp;
