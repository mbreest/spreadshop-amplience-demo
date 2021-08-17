/* eslint-disable @typescript-eslint/camelcase */
import { TypeFeaturedUSP } from 'lib/customtypes';
import { Background } from './background';
import { Cta1 } from './cta';
import Cards from './FeaturedUsp/Cards';

export const FeaturedUsp = ({ text, cta, background, usps }: TypeFeaturedUSP) => {
  return (
    <Background background={background}>
      <div className="Featured w-full flex flex-col">
        <div className="w-full grid justify-items-center">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{text.title}</h2>
          <div className="text-lg text-gray-700 py-6">{text.details}</div>
        </div>
        <Cards cardData={usps} />
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta1 cta={cta} />
        </div>
      </div>
    </Background>
  );
};
