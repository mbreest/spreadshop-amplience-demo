/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { getHelpdeskPages } from 'lib/api';
import { isPreviewEnabled } from 'lib/preview';
import { TypeHelpdeskPage } from 'lib/types';
import { Link } from 'components/link';

type HelpdeskProps = {
  pages: TypeHelpdeskPage[];
};

export default function Helpdesk({ pages }: HelpdeskProps) {
  return (
    <div className="w-full pb-16">
      <div className="sprd-container mx-auto p-8 h-full">
        {pages.map(function (page, idx) {
          return (
            <div key={'article-' + idx}>
              <Link {...{ type: 'Helpdesk Article', path: page._meta.deliveryKey }}>
                {page.seo.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, query, locale }) {
  const preview = isPreviewEnabled(query);
  const pages = await getHelpdeskPages({
    locale,
    limit: 100,
    preview,
  });
  return {
    props: { pages },
  };
}
