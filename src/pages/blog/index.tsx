/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { getBlogPosts } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { TypeBlogPostPage } from 'lib/types';
import { Link } from 'components/link';
import { ImageUrlFactory } from 'lib/image';

type BlogProps = {
  news: TypeBlogPostPage[];
  interviews: TypeBlogPostPage[];
};

export default function Blog({ news, interviews }: BlogProps) {
  return (
    <div className="w-full pb-16">
      <div className="sprd-container mx-auto p-8 h-full">
        <div>
          <h1 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">News</h1>

          <div className="md:flex md:flex-row pt-4">
            {news.map(function (page, idx) {
              const blogPost = page as TypeBlogPostPage;
              return (
                <div key={'article-' + idx} className="pr-4 pb-4 md:w-1/3">
                  <img src={ImageUrlFactory.createUrl(blogPost.post.illustration)} />
                  <div className="font-bold">{blogPost.post.title}</div>
                  <Link {...{ type: 'Blog Post', path: blogPost._meta.deliveryKey }}>
                    <a className="text-yellow-600 underline">Weiterlesen</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">
            Shop of the Month
          </h1>

          <div className="md:flex md:flex-row pt-4">
            {interviews.map(function (page, idx) {
              const blogPost = page as TypeBlogPostPage;
              return (
                <div key={'article-' + idx} className="pr-4 pb-4 md:w-1/3">
                  <img src={ImageUrlFactory.createUrl(blogPost.post.illustration)} />
                  <div className="font-bold">{blogPost.post.title}</div>
                  <Link {...{ type: 'Blog Post', path: blogPost._meta.deliveryKey }}>
                    <a className="text-yellow-600 underline">Weiterlesen</a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const preview = isPreviewEnabled(query);

  const news = await getBlogPosts({
    locale,
    limit: 3,
    preview,
    category: 'news',
  });

  const interviews = await getBlogPosts({
    locale,
    limit: 3,
    preview,
    category: 'interviews',
  });

  return {
    props: { news, interviews },
  };
}
