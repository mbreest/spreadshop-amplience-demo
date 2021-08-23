/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getComponent, getBlogPosts } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { TypeBlogRoll, TypeSection } from 'lib/types';
import { BlockRenderer } from 'components/renderer/block-renderer';

type LandingProps = {
  component: TypeSection;
  segment: string;
  renderComponent: boolean;
};

export default function Landing({ component, segment }: LandingProps) {
  if (!component) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="w-full pb-16">
      <BlockRenderer block={component} segment={segment} />
    </div>
  );
}

export async function getServerSideProps({ params, query, locale, req }) {
  const id = query.id;

  const stagingEnvironment = query?.vse ? query.vse : '';
  const renderDate =
    isPreviewEnabled(query) && query.renderDate ? new Date(query.renderDate) : new Date();
  const preview = isPreviewEnabled(query);
  const component = await getComponent({ locale, id, preview, stagingEnvironment });

  if (component._meta.schema == 'https://amp-rsa.amplience.com/component-blog-roll.json') {
    const blogRoll = component as TypeBlogRoll;
    blogRoll.topPosts = await getBlogPosts({
      preview,
      locale,
      limit: 3,
      category: blogRoll.category,
    });
  }

  const segment = query.segment || req.cookies.segment || 'default';

  return {
    props: { component, segment, renderComponent: true },
  };
}
