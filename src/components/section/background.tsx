import React from 'react';
import SectionBackground from './sectionBackground';
import { TypeBackground } from 'lib/types';
import { ImageUrlFactory } from 'lib/image';

type BackgroundProps = {
  background: TypeBackground;
  children: React.ReactNode;
};

export const Background = ({ background, children }: BackgroundProps) => {
  const image = background.image != undefined;
  const imageOverlay = background.overlay != undefined;

  const sectionStyle = {
    backgroundColor:
      background.color == 'White' ? 'white' : background.color == 'Light' ? '#F2F2F2' : 'dark',
  } as React.CSSProperties;

  // TODO image
  const backgroundStyle = {
    backgroundImage:
      "url('" + (background.image ? ImageUrlFactory.createUrl(background.image) : '') + "')",
  } as React.CSSProperties;

  const overlayStyle = {
    backgroundColor: background.overlay !== '' ? background.overlay : 'transparent',
    display: imageOverlay ? 'block' : 'none',
    opacity: imageOverlay ? 0.7 : 0,
    mixBlendMode: 'soft-light',
  } as React.CSSProperties;

  return (
    <section className="relative" style={sectionStyle}>
      {image ? (
        <SectionBackground overlayStyles={overlayStyle} backgroundStyles={backgroundStyle} />
      ) : null}
      <div className="relative sprd-container mx-auto py-9 h-full">{children}</div>
    </section>
  );
};
