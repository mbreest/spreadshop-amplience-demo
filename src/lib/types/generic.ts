import { ContentMeta } from 'dc-delivery-sdk-js';

export interface TypeSEO {
  title: string;
  details: string;
  keywords: string[];
  index: boolean;
  follow: boolean;
}

export interface TypeImage {
  _meta: ContentMeta;
  defaultHost: string;
  endpoint: string;
  id: string;
  name: string;
}
