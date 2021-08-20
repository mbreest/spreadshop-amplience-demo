/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getHelpdeskPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { TypeHelpdeskPage } from 'lib/types';
import ReactMarkdown from 'react-markdown';

type HelpdeskArticleProps = {
  page: TypeHelpdeskPage;
};

export default function HelpdeskArticle({ page }: HelpdeskArticleProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="w-full pb-16">
      <PageHead seo={page.seo} />
      <div className="sprd-container mx-auto p-8 h-full">
        <div className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">
          {page.article?.title}
        </div>
        <div className="leading-relaxed text-lg text-gray-700 pt-8">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="h1 pt-4 text-3xl font-medium leading-tight text-gray-900"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="h2 pt-4 text-2xl pb-4 font-medium leading-tight text-gray-900"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="h3 pt-4 text-1xl font-medium leading-tight text-gray-900"
                  {...props}
                />
              ),
              a: ({ node, ...props }) => <a className="text-yellow-600 underline" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-6" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc pl-6" {...props} />,
            }}>
            {page.article?.text}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const slug = String(params.slug ?? '');
  const preview = isPreviewEnabled(query);
  const stagingEnvironment = query?.vse ? query.vse : '';
  const page = await getHelpdeskPage({ slug, preview, locale, stagingEnvironment });

  return {
    props: { page },
  };
}
