import { ContentMeta } from 'dc-delivery-sdk-js';
import { TypeSEO } from './generic';

export interface TypeBlogCategoryPage {
  _meta: ContentMeta;
  seo: TypeSEO;
  category: TypeBlogCategory;
}

export interface TypeBlogCategory {
  title: string;
}
