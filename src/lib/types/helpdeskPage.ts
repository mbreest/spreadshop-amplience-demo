import { ContentMeta } from 'dc-delivery-sdk-js';
import { TypeSEO } from './generic';

export interface TypeHelpdeskPage {
  _meta: ContentMeta;
  seo: TypeSEO;
  article: TypeHelpdeskArticle;
}

export interface TypeHelpdeskArticle {
  title: string;
  text: string;
}
