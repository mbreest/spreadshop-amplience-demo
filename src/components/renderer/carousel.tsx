/* eslint-disable @typescript-eslint/camelcase */
import { TypeCarousel } from 'lib/types';
import { Background } from '../section/background';
import { Cta } from '../cta';
import { Tab, Tabs } from 'components/tabs';
import { Image } from 'dc-delivery-sdk-js';
import { defaultClientConfig } from 'lib/api';

export const Carousel = ({ text, background, cta, categories }: TypeCarousel) => {
  return (
    <Background background={background}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{text.title}</h2>
          <div className="text-lg text-gray-700 py-6">{text.details}</div>
        </div>

        {categories.length == 1 && (
          <>
            {categories.map(function (category, idx) {
              return (
                <div
                  key={'category-' + idx}
                  className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
                  {category.illustrations.map(function (illustration, idx1) {
                    return (
                      <div key={'category-' + idx} className="flex flex-shrink-0 w-60 p-2">
                        <img
                          key={idx1}
                          src={new Image(illustration, defaultClientConfig).url().build()}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
        {categories.length > 1 && (
          <Tabs>
            {categories.map(function (category, idx) {
              return (
                <Tab title={category.title} selected="false" key={'tab-' + idx}>
                  <div className="flex flex-row flex-wrap w-full">
                    {category.illustrations.map(function (illustration, idx1) {
                      return (
                        <div
                          key={'category-' + idx}
                          className="flex-shrink-0 w-1/2 md:w-1/4 md:pr-4 pb-4">
                          <img
                            key={idx1}
                            src={new Image(illustration, defaultClientConfig).url().build()}
                          />
                        </div>
                      );
                    })}
                  </div>
                </Tab>
              );
            })}
          </Tabs>
        )}
      </div>
      <div className="flex w-full justify-center pt-8 pb-8">
        <Cta cta={cta} />
      </div>
    </Background>
  );
};
