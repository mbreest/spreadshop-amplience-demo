/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getBlogPostPage } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { TypeBlogPostPage, TypeImage, TypeSection } from 'lib/types';
import ReactMarkdown from 'react-markdown';
import { ImageUrlFactory } from 'lib/image';
import { BlockRenderer } from 'components/renderer/block-renderer';

type BlogPostProps = {
  page: TypeBlogPostPage;
  segment: string;
};

export default function BlogPost({ page, segment }: BlogPostProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <PageHead seo={page.seo} />
      <div className="w-full pb-16">
        <div className="sprd-container mx-auto p-8 h-full">
          <h1 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">
            {page.post.title}
          </h1>
          {page.post?.illustration && (
            <img src={ImageUrlFactory.createUrl(page.post?.illustration)} className="pt-8" />
          )}
          <div className="pt-8">
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
                p: ({ node, ...props }) => <p className="pb-4" {...props} />,
              }}>
              {page.post?.text}
            </ReactMarkdown>
            {page.post?.text1?.map((richText) => {
              if (richText.type == 'markdown') {
                const markdown = richText.data as string;
                return (
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
                      a: ({ node, ...props }) => (
                        <a className="text-yellow-600 underline" {...props} />
                      ),
                      ol: ({ node, ...props }) => <ol className="list-decimal pl-6" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc pl-6" {...props} />,
                      p: ({ node, ...props }) => <p className="pb-4" {...props} />,
                    }}>
                    {markdown}
                  </ReactMarkdown>
                );
              } else if (richText.type == 'dc-image-link') {
                const image = richText.data as TypeImage;
                return <img src={ImageUrlFactory.createUrl(image)} width="100%" />;
              } else if (richText.type == 'dc-content-link') {
                const section = richText.data as TypeSection;
                return <BlockRenderer block={section} segment={segment} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params, query, locale, req }) {
  const slug = String(params.slug ?? '');
  const preview = isPreviewEnabled(query);
  const stagingEnvironment = query?.vse ? query.vse : '';
  const page = await getBlogPostPage({
    slug,
    preview,
    locale,
    stagingEnvironment,
  });

  const segment = query.segment || req.cookies.segment || 'default';

  return {
    props: { page, segment },
  };
}
