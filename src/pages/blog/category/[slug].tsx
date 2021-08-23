/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';

import { getBlogCategoryPage, getBlogPosts } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { PageHead } from 'components/page-head';
import { TypeBlogCategoryPage, TypeBlogPostPage } from 'lib/types';
import { ImageUrlFactory } from 'lib/image';
import { Link } from 'components/link';

type BlogCategoryProps = {
  page: TypeBlogCategoryPage;
  posts: TypeBlogPostPage[];
};

export default function BlogCategory({ page, posts }: BlogCategoryProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <PageHead seo={page.seo} />
      <div className="w-full pb-16">
        <div className="sprd-container mx-auto p-8 h-full">
          <h1 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">
            {page.category.title}
          </h1>
          <div className="md:flex md:flex-row md:flex-wrap pt-4">
            {posts.map(function (post, idx) {
              return (
                <div key={'article-' + idx} className="pr-4 pb-4 md:w-1/3 md:flex-shrink-0">
                  {post.post.illustration && (
                    <img src={ImageUrlFactory.createUrl(post.post.illustration)} />
                  )}
                  <div className="font-bold">{post.post.title}</div>
                  <Link {...{ type: 'Blog Post', path: post._meta.deliveryKey }}>
                    <a className="text-yellow-600 underline">Weiterlesen</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const slug = String(params.slug ?? '');
  const preview = isPreviewEnabled(query);
  const stagingEnvironment = query?.vse ? query.vse : '';
  const blogCategoryPage = await getBlogCategoryPage({
    slug,
    preview,
    locale,
    stagingEnvironment,
  });

  const blogPostPages = await getBlogPosts({
    preview,
    locale,
    limit: 10,
    category: slug,
  });

  console.log(blogCategoryPage._meta.deliveryId);

  //  console.log(blogPostPages);

  return {
    props: { page: blogCategoryPage, posts: blogPostPages },
  };
}
