import React from 'react';
import SectionBackground from '../Section/SectionBackground';
import { TypeBackground } from 'lib/customtypes';
import { Image } from 'dc-delivery-sdk-js';
import { defaultClientConfig } from 'lib/api1';

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
      "url('" +
      (background.image ? new Image(background.image, defaultClientConfig).url().build() : '') +
      "')",
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
