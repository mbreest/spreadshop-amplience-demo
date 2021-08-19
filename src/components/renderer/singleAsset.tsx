/* eslint-disable @typescript-eslint/camelcase */
import { TypeSingleAsset } from 'lib/types';
import { Background } from '../section/background';
import { Cta } from '../cta';
import { Image } from 'dc-delivery-sdk-js';
import { defaultClientConfig } from 'lib/api';
import { ImageUrlFactory } from 'lib/image';

export const SingleAsset = ({ text, background, cta, illustrations }: TypeSingleAsset) => {
  return (
    <Background background={background}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{text.title}</h2>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{text.details}</div>
        </div>
        <div className="w-full grid justify-center">
          <div className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
            {illustrations &&
              illustrations.map(function (illustration, idx) {
                if (illustration) {
                  return (
                    <div key={'sa-illustration-' + idx} className="flex flex-shrink-0 w-96 p-2">
                      <img src={ImageUrlFactory.createUrl(illustration)} />
                    </div>
                  );
                }
              })}
          </div>
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta cta={cta} />
        </div>
      </div>
    </Background>
  );
};
