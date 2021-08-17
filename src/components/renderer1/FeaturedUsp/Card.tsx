import React from 'react';

const Card = ({ id, title, details, hasImg, imgSrc }) => {
  return (
    <div className="flex flex-col justify-top items-center flex-shrink-0">
      {hasImg && (
        <div className="h-60 w-60 align-top">
          <img src={imgSrc} />
        </div>
      )}
      <h2 className="font-bold pb-4">{title}</h2>
      {details && <div className="text-center px-9">{details}</div>}
    </div>
  );
};

export default Card;
