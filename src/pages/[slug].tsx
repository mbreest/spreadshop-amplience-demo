/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getLandingPage } from 'lib/api1';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { BlockRenderer1 } from 'components/renderer1/block-renderer';
import { TypeLandingPage } from 'lib/customtypes';

type LandingProps = {
  landing: TypeLandingPage;
  segment: string;
};

export default function Landing({ landing, segment }: LandingProps) {
  if (!landing) {
    return <ErrorPage statusCode={404} />;
  }

  const { seo, hero: hero1, sections: sections1 = [] } = landing;

  return (
    <div className="w-full pb-16">
      <PageHead seo={seo} />
      <BlockRenderer1 block={hero1} segment={segment} />
      <BlockRenderer1 block={sections1} segment={segment} />
    </div>
  );
}

export async function getServerSideProps({ params, query, locale, req }) {
  const slug = String((params && params.slug) ?? 'homepage');
  const renderDate =
    isPreviewEnabled(query) && query.renderDate ? new Date(query.renderDate) : new Date();
  const preview = isPreviewEnabled(query);

  const landing = await getLandingPage({ slug, preview, locale });

  const segment = query.segment || req.cookies.segment || 'default';

  return {
    props: { segment, landing },
  };
}
