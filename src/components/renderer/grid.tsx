/* eslint-disable @typescript-eslint/camelcase */
import { TypeGrid } from 'lib/types';
import { Background } from '../section/background';
import { Cta } from '../cta';
import { Link } from 'components/link';
import { ImageUrlFactory } from 'lib/image';

export const Grid = ({ text, background, cta, grid }: TypeGrid) => {
  return (
    <Background background={background}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">
            {text?.title}
          </h2>
          {text?.details && (
            <div className="leading-relaxed text-lg text-gray-700 py-6">{text.details}</div>
          )}
        </div>
        <div className="w-full grid justify-center">
          <div className="pt-4 flex flex-row flex-wrap w-full">
            {grid &&
              grid.map(function (gridEntry, idx) {
                if (gridEntry) {
                  let linkProps1;
                  if (gridEntry && gridEntry.link) {
                    linkProps1 = { type: gridEntry.link.type, path: gridEntry.link.value };
                  }

                  return (
                    <div
                      key={'grid-entry-' + idx}
                      className="flex flex-col flex-shrink-0 w-1/2 md:w-1/4  p-4">
                      {gridEntry.illustration && (
                        <img src={ImageUrlFactory.createUrl(gridEntry.illustration)} />
                      )}
                      {linkProps1 && (
                        <div className="pt-4">
                          <Link {...linkProps1}>
                            <a className="w-full md:w-auto text-gray-700 font-semibold text-center">
                              {gridEntry.link.label} &gt;
                            </a>
                          </Link>
                        </div>
                      )}
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
