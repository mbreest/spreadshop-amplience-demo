import { ContentClient, StagingEnvironmentFactory } from 'dc-delivery-sdk-js';
import { ContentClientConfigV2 } from 'dc-delivery-sdk-js';
import stringify from 'fast-safe-stringify';
import { TypeLandingPage, TypeSection, TypeHelpdeskPage } from './types';

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
    .page(10)
    .request();

  return res.responses.map((r) => {
    return JSON.parse(stringify(r.content)) as TypeHelpdeskPage;
  });
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
