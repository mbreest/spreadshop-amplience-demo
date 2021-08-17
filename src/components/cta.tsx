import React from 'react';
import { Link } from './link';
import { TypeCTA } from 'lib/types';

type CtaProps = {
  cta: TypeCTA;
};

export const Cta = ({ cta }: CtaProps) => {
  let linkProps;

  if (cta && cta.linkTarget && cta.linkType) {
    linkProps = { type: cta.linkType, path: cta.linkTarget };
  }
  const buttonStyling = {
    fontWeight: 700,
    padding: '1rem 3rem',
    borderRadius: '2px',
    display: 'inline-block',
    lineHeight: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    letterSpacing: '0.05rem',
  };

  return (
    <>
      {linkProps && cta.text && cta.type == 'Primary' && (
        <Link {...linkProps}>
          <a
            className="w-auto bg-yellow-600 hover:bg-yellow-500 text-white text-center"
            style={buttonStyling}>
            {cta.text}
          </a>
        </Link>
      )}
      {linkProps && cta.text && cta.type == 'Ghost' && (
        <Link {...linkProps}>
          <a
            className="w-auto bg-white text-gray-700 border-2 border-gray-700 text-center"
            style={buttonStyling}>
            {cta.text}
          </a>
        </Link>
      )}
    </>
  );
};
