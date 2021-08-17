import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import { Image } from 'dc-delivery-sdk-js';
import { defaultClientConfig } from 'lib/api1';

const Cards = ({ cardData }) => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        watchOverflow={true}>
        {cardData.map((usp, idx) => {
          return (
            <SwiperSlide key={'slide' + idx}>
              <Card
                id={idx}
                title={usp.title}
                details={usp.details}
                hasImg={usp.illustration != undefined}
                imgSrc={
                  usp.illustration
                    ? new Image(usp.illustration, defaultClientConfig).url().build()
                    : null
                }
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Cards;
