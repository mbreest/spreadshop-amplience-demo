import { useRouter } from 'next/router';

import { isPreviewEnabled, withPreviewParam } from './preview';

export interface LinkProps {
  href: string;
  as: string;
}

function linkToPage(type: string, slug: string, isPreview: boolean): LinkProps {
  switch (type) {
    case 'Landing Page': {
      if (slug == 'blog') {
        return {
          href: withPreviewParam(`/blog`, isPreview),
          as: withPreviewParam(`/blog`, isPreview),
        };
      } else {
        return {
          href: withPreviewParam(`/[slug]`, isPreview),
          as: withPreviewParam(`/${slug}`, isPreview),
        };
      }
    }
    case 'Blog Post': {
      return {
        href: withPreviewParam(`/blog/[slug]`, isPreview),
        as: withPreviewParam(`/blog/${slug}`, isPreview),
      };
    }
    case 'Helpdesk Article': {
      return {
        href: withPreviewParam(`/helpdesk/[slug]`, isPreview),
        as: withPreviewParam(`/helpdesk/${slug}`, isPreview),
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
