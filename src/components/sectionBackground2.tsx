import React from 'react';

const SectionBackground = ({ overlayStyles, backgroundStyles }) => {
  return (
    <div className="sprd-bg__background-image" style={backgroundStyles}>
      <div className="sprd-bg__overlay" style={overlayStyles}></div>
    </div>
  );
};

export default SectionBackground;
