import { ContentClient } from 'dc-delivery-sdk-js';
import { ContentClientConfigV2 } from 'dc-delivery-sdk-js';
import stringify from 'fast-safe-stringify';
import {
  TypeLandingPage,
  TypeSection,
  TypeHelpdeskPage,
  TypeBlogPostPage,
  TypeBlogCategoryPage,
} from './types';

export const defaultClientConfig: ContentClientConfigV2 = {
  hubName: process.env.DYNAMIC_CONTENT_HUB_NAME || '',
  secureMediaHost: process.env.DYNAMIC_CONTENT_SECURE_MEDIA_HOST || '',
};

type GetPageParams = {
  locale: Locale;
  preview?: boolean;
  slug: string;
  stagingEnvironment?: string;
};

export async function getLandingPage(params: GetPageParams) {
  const { preview, locale, slug, stagingEnvironment } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
    stagingEnvironment: stagingEnvironment,
  } as ContentClientConfigV2);

  const res = await client.getContentItemByKey(slug);

  return JSON.parse(stringify(res.body)) as TypeLandingPage;
}

export async function getHelpdeskPage(params: GetPageParams) {
  const { preview, locale, slug, stagingEnvironment } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
    stagingEnvironment: stagingEnvironment,
  } as ContentClientConfigV2);

  const res = await client.getContentItemByKey(slug);

  return JSON.parse(stringify(res.body)) as TypeHelpdeskPage;
}

export async function getBlogPostPage(params: GetPageParams) {
  const { preview, locale, slug, stagingEnvironment } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
    stagingEnvironment: stagingEnvironment,
  } as ContentClientConfigV2);

  const res = await client.getContentItemByKey(slug);

  return JSON.parse(stringify(res.body)) as TypeBlogPostPage;
}

export async function getBlogCategoryPage(params: GetPageParams) {
  const { preview, locale, slug, stagingEnvironment } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
    stagingEnvironment: stagingEnvironment,
  } as ContentClientConfigV2);

  const res = await client.getContentItemByKey(slug);

  return JSON.parse(stringify(res.body)) as TypeBlogCategoryPage;
}

type GetPagesParams = {
  locale: Locale;
  preview?: boolean;
  limit: number;
  stagingEnvironment?: string;
};

export async function getHelpdeskPages(params: GetPagesParams) {
  const { preview, locale, limit, stagingEnvironment } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
    stagingEnvironment: stagingEnvironment,
  } as ContentClientConfigV2);

  const res = await client
    .filterByContentType('https://amp-rsa.amplience.com/pagetype-helpdesk-article.json')
    .page(limit)
    .request();

  return res.responses.map((r) => {
    return JSON.parse(stringify(r.content)) as TypeHelpdeskPage;
  });
}

type GetBlogPostsParams = {
  locale: Locale;
  preview?: boolean;
  limit: number;
  category?: string;
};

export async function getBlogPosts(params: GetBlogPostsParams) {
  const { preview, locale, limit, category } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
  } as ContentClientConfigV2);

  try {
    const res = await client
      .filterByContentType('https://amp-rsa.amplience.com/pagetype-blog-post.json')
      .filterBy('/category', category)
      .page(limit)
      .request();

    return res.responses.map((r) => {
      return JSON.parse(stringify(r.content)) as TypeBlogPostPage;
    });
  } catch (error) {
    console.log(error);
  }
}

type GetComponentParams = {
  locale: Locale;
  preview?: boolean;
  id: string;
  stagingEnvironment?: string;
};

export async function getComponent(params: GetComponentParams) {
  const { preview, locale, id, stagingEnvironment } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
    stagingEnvironment: stagingEnvironment,
  } as ContentClientConfigV2);

  const res = await client.getContentItemById(id);

  return JSON.parse(stringify(res.body)) as TypeSection;
}
