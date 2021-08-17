import { useRouter } from 'next/router';

import { isPreviewEnabled, withPreviewParam } from './preview';

export interface LinkProps {
  href: string;
  as: string;
}

function linkToPage(type: string, slug: string, isPreview: boolean): LinkProps {
  switch (type) {
    case 'Landing Page': {
      return {
        href: withPreviewParam(`/[slug]`, isPreview),
        as: withPreviewParam(`/${slug}`, isPreview),
      };
    }
    default: {
      throw new Error('Page type is not supported yet');
    }
  }
}

export function useNavigation() {
  const { query, asPath: currentPath, route } = useRouter();
  const isPreview = isPreviewEnabled(query);

  const linkTo = (type: string, path: string) => {
    return linkToPage(type, path, isPreview);
  };

  const linkToPath = (url: string): LinkProps => {
    return {
      href: withPreviewParam(`${url}`, isPreview),
      as: withPreviewParam(`${url}`, isPreview),
    };
  };

  return {
    currentPath,
    isPreview,
    route,
    linkTo,
    linkToPath,
  };
}
