import { ContentMeta } from 'dc-delivery-sdk-js';
import { TypeSEO, TypeImage } from './generic';

export interface TypeBlogPostPage {
  _meta: ContentMeta;
  seo: TypeSEO;
  post: TypeBlogPost;
}

export interface TypeBlogPost {
  illustration: TypeImage;
  title: string;
  text: string;
  text1: TypeBlogPostRichText[];
}

export interface TypeBlogPostRichText {
  type: string;
  data: any;
}
