/* eslint-disable @typescript-eslint/camelcase */
import { TypeUSPList } from 'lib/customtypes';
import { Background } from '../background';
import { Cta } from '../cta';
import { Link } from '../link';
import { Image } from 'dc-delivery-sdk-js';
import { defaultClientConfig } from 'lib/api';

export const UspList = ({ text, background, cta, layout, usps }: TypeUSPList) => {
  return (
    <Background background={background}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{text.title}</h2>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{text.details}</div>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {usps &&
            usps.map(function (usp, idx) {
              let linkProps1;
              if (usp && usp.link) {
                linkProps1 = { type: usp.link.type, path: usp.link.value };
              }

              return (
                <div key={'usplist-' + idx} className="w-60 pr-8 pt-4 grid justify-items-center">
                  {usp.illustration && (
                    <div className="w-30 h-30">
                      <img
                        src={new Image(usp.illustration, defaultClientConfig).url().build()}
                        className="max-h-28"
                      />
                    </div>
                  )}
                  <div className="grid justify-items-center">
                    <h3 className="font-bold">{usp.title}</h3>
                    {usp.details && <div className="text-center">{usp.details}</div>}
                    {linkProps1 && (
                      <div className="pt-4">
                        <Link {...linkProps1}>
                          <a className="w-full md:w-auto text-gray-700 font-semibold text-center">
                            {usp.link.label}
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta cta={cta} />
        </div>
      </div>
    </Background>
  );
};
