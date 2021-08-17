import { TypeHero } from 'lib/customtypes';
import { Background } from './background';
import { Cta1 } from './cta';

export const Hero = ({ text, background, cta }: TypeHero) => {
  return (
    <Background background={background}>
      <div className="flex h-80">
        <div className="flex flex-col justify-center items-start md:w-2/3">
          <h1 className="h0 pt-4 text-4xl font-medium leading-tight text-gray-900 lg:w-7/12">
            {text.title}
          </h1>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{text.details}</div>
          <Cta1 cta={cta} />
        </div>
      </div>
    </Background>
  );
};
