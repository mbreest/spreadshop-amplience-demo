import { ContentMeta } from 'dc-delivery-sdk-js';
import { TypeSEO, TypeImage } from './Generic';

export interface TypeBlogPost {
  _meta: ContentMeta;
  seo: TypeSEO;
  illustration: TypeImage;
  title: string;
}
