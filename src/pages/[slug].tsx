/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getLandingPage, getBlogPosts } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { BlockRenderer } from 'components/renderer/block-renderer';
import { TypeBlogRoll, TypeLandingPage } from 'lib/types';

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
  const stagingEnvironment = query?.vse ? query.vse : '';
  const preview = isPreviewEnabled(query);
  const landing = await getLandingPage({ slug, preview, locale, stagingEnvironment });
  const segment = query.segment || req.cookies.segment || 'default';

  for (const section of landing.sections) {
    if (section._meta.schema == 'https://amp-rsa.amplience.com/component-blog-roll.json') {
      const blogRoll = section as TypeBlogRoll;
      blogRoll.topPosts = await getBlogPosts({
        preview,
        locale,
        limit: 3,
        category: blogRoll.category,
      });
    }
  }

  return {
    props: { segment, landing },
  };
}
