import _ from 'lodash';
import React from 'react';

import { TypeSection } from 'lib/types';
import { Hero } from 'components/renderer/hero';
import { Banner } from 'components/renderer/banner';
import { Carousel } from 'components/renderer/carousel';
import { FeaturedUsp } from 'components/renderer/featuredUsp';
import { UspList } from 'components/renderer/uspList';
import { SingleAsset } from 'components/renderer/singleAsset';
import { Calculator } from 'components/renderer/calculator';
import { BlogRoll } from 'components/renderer/blogRoll';
import { Testimonial } from 'components/renderer/testimonial';
import { FAQ } from 'components/renderer/faq';
import { Grid } from 'components/renderer/grid';

type BlockRendererProps = {
  block: TypeSection | TypeSection[];
  segment: string;
};

const BlockRenderer = ({ block, segment }: BlockRendererProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b._meta.deliveryId}`} block={b} segment={segment} />
        ))}
      </>
    );
  }

  const contentTypeId = block._meta.schema;

  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const id = block._meta.deliveryId;

  const componentProps = {
    ...block,
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

const ContentTypeMap = {
  ['https://amp-rsa.amplience.com/component-hero.json']: Hero,
  ['https://amp-rsa.amplience.com/component-banner.json']: Banner,
  ['https://amp-rsa.amplience.com/component-carousel.json']: Carousel,
  ['https://amp-rsa.amplience.com/component-featured-usps.json']: FeaturedUsp,
  ['https://amp-rsa.amplience.com/component-usp-list.json']: UspList,
  ['https://amp-rsa.amplience.com/component-single-asset.json']: SingleAsset,
  ['https://amp-rsa.amplience.com/component-calculator.json']: Calculator,
  ['https://amp-rsa.amplience.com/component-blog-roll.json']: BlogRoll,
  ['https://amp-rsa.amplience.com/component-testimonial.json']: Testimonial,
  ['https://amp-rsa.amplience.com/component-faq.json']: FAQ,
  ['https://amp-rsa.amplience.com/component-grid.json']: Grid,
};

export { BlockRenderer };
