import React from 'react';
import NextLink from 'next/link';
import { useNavigation } from '../lib/useNavigation';

type LinkProps = {
  type?: string;
  path?: string;
  children: React.ReactNode;
};

export const Link = ({ path, type, children }: LinkProps) => {
  const { linkTo, linkToPath } = useNavigation();
  const props =
    type == 'External URL'
      ? path.startsWith('https')
        ? { href: path }
        : linkToPath(path)
      : linkTo(type, path);

  return <NextLink {...props}>{children}</NextLink>;
};
