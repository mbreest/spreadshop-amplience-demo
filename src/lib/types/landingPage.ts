import { ContentMeta } from 'dc-delivery-sdk-js';
import { TypeSEO, TypeImage } from './generic';
import { TypeBlogPost } from './blogPost';
import { TypeHelpdeskPage } from './helpdeskPage';

export interface TypeLandingPage {
  _meta: ContentMeta;
  seo: TypeSEO;
  hero: TypeHero;
  sections: TypeSection[];
}

export interface TypeSection {
  _meta: ContentMeta;
}

export interface TypeHero extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
  meta: TypeHeroMeta;
}

export interface TypeBanner extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
}

export interface TypeFeaturedUSP extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
  usps: TypeUSP[];
}

export interface TypeCarousel extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
  categories: TypeCategory[];
}

export interface TypeTestimonial extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
  logos: TypeLogos;
  quotes: TypeQuote[];
}

export interface TypeCalculator extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
  calculator: TypeCalculatorText;
}

export interface TypeSingleAsset extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
  illustrations: TypeImage[];
}

export interface TypeUSPList extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
  usps: TypeUSP[];
  layout: TypeUSPLayout;
}

export interface TypeBlogRoll extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  cta: TypeCTA;
  category: string;
  topPosts: TypeBlogPost[];
}

export interface TypeFAQ extends TypeSection {
  text: TypeText;
  background: TypeBackground;
  questions: TypeFAQQuestions;
  entries: TypeHelpdeskPage[];
}

export interface TypeFAQQuestions {
  title: string;
  description: string;
  cta1: TypeCTA;
  cta2: TypeCTA;
}

export interface TypeUSPLayout {
  twoColumn: boolean;
}

export interface TypeCalculatorText {
  text: string;
}

export interface TypeLogos {
  showLogo: boolean;
  logos: TypeImage[];
}

export interface TypeQuote {
  author: string;
  quote: string;
  illustration: TypeImage;
}

export interface TypeCategory {
  title: string;
  illustrations: TypeImage[];
}

export interface TypeUSP {
  title: string;
  details: string;
  illustration: TypeImage;
  link: TypeLink;
}

export interface TypeText {
  title: string;
  details: string;
}

export interface TypeHeroMeta {
  subPage: boolean;
}

export interface TypeCTA {
  type: 'Primary' | 'Ghost';
  text: string;
  linkTarget: string;
  linkType: string;
}

export interface TypeBackground {
  color: 'White' | 'Light' | 'Dark';
  overlay: string;
  image: TypeImage;
}

export interface TypeLink {
  label: string;
  type: string;
  value: string;
}
