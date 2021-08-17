import { ContentClient, StagingEnvironmentFactory } from 'dc-delivery-sdk-js';
import { ContentClientConfigV2 } from 'dc-delivery-sdk-js';
import stringify from 'fast-safe-stringify';
import { TypeLandingPage, TypeSection } from './types';

export const defaultClientConfig: ContentClientConfigV2 = {
  hubName: process.env.DYNAMIC_CONTENT_HUB_NAME || '',
  secureMediaHost: process.env.DYNAMIC_CONTENT_SECURE_MEDIA_HOST || '',
};

type GetLandingPageParams = {
  locale: Locale;
  preview?: boolean;
  slug: string;
  stagingEnvironment?: string;
};

export async function getLandingPage(params: GetLandingPageParams) {
  const { preview, locale, slug, stagingEnvironment } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
    stagingEnvironment: stagingEnvironment,
  } as ContentClientConfigV2);

  const res = await client.getContentItemByKey(slug);

  return JSON.parse(stringify(res.body)) as TypeLandingPage;
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
