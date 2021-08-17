import React from 'react';
import Head from 'next/head';
import { TypeSEO } from 'lib/types';

type PageHeadProps = {
  seo: TypeSEO;
};

export const PageHead = ({ seo }: PageHeadProps) => {
  const { details = '', keywords = [], title = seo.title } = seo;
  const robots = [
    seo.index === false ? 'noindex' : undefined,
    seo.follow === false ? 'nofollow' : undefined,
  ].filter((x) => x !== undefined);

  return (
    <Head>
      <title>{title}</title>
      {robots.length > 0 && <meta name="robots" content={robots.join(', ')} />}
      {details.trim() !== '' && <meta name="description" content={details} key="description" />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(',')} />}
    </Head>
  );
};
