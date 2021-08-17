/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getLandingPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { BlockRenderer } from 'components/renderer/block-renderer';
import { TypeLandingPage } from 'lib/types';

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
      <BlockRenderer block={hero1} segment={segment} />
      <BlockRenderer block={sections1} segment={segment} />
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
