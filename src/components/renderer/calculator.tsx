/* eslint-disable @typescript-eslint/camelcase */
import { TypeCalculator } from 'lib/types';
import { Background } from '../section/background';
import { Cta } from '../cta';
import React from 'react';

export const Calculator = ({ text, background, cta, calculator }: TypeCalculator) => {
  return (
    <Background background={background}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{text.title}</h2>
        </div>
        <div className="flex flex-col md:flex-row p-4">
          <div className="leading-relaxed text-lg text-gray-700 md:w-1/2 pr-8">
            {calculator.text}
          </div>
          <div className="calculator__container md:w-1/2">
            <div className="leading-relaxed text-lg text-gray-700 mb-4">{text.details}</div>
            <a href="https://youtu.be/bFEoMO0pc7k?t=8" target="_blank" rel="noreferrer">
              <img src="/image/calculator_placeholder.png" alt="Placeholder" />
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center pt-8 pb-8">
          <Cta cta={cta} />
        </div>
      </div>
    </Background>
  );
};
