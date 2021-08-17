import { ContentClient } from 'dc-delivery-sdk-js';
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
};

export async function getLandingPage(params: GetLandingPageParams) {
  const { preview, locale, slug } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
  });

  const res = await client.getContentItemByKey(slug);

  return JSON.parse(stringify(res.body)) as TypeLandingPage;
}

type GetComponentParams = {
  locale: Locale;
  preview?: boolean;
  id: string;
};

export async function getComponent(params: GetComponentParams) {
  const { preview, locale, id } = params;
  const client = new ContentClient({
    hubName: 'spreadshirtdevpoc',
    locale: locale.code,
  });

  const res = await client.getContentItemById(id);

  return JSON.parse(stringify(res.body)) as TypeSection;
}
