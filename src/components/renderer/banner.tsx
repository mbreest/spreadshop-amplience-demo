/* eslint-disable @typescript-eslint/camelcase */
import { TypeBanner } from 'lib/types';
import { Background } from '../section/background';
import { Cta } from '../cta';

export const Banner = ({ text, cta, background }: TypeBanner) => {
  return (
    <Background background={background}>
      <div className="mx-auto flex h-80 items-center">
        <div className="w-full grid justify-items-center">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{text.title}</h2>
          <div className="text-lg text-gray-700 py-6">{text.details}</div>
          <Cta cta={cta} />
        </div>
      </div>
    </Background>
  );
};
