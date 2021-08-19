/* eslint-disable @typescript-eslint/camelcase */
import { TypeTestimonial } from 'lib/types';
import { Background } from '../section/background';
import { Cta } from '../cta';
import { ImageUrlFactory } from 'lib/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Testimonial = ({ text, cta, background, quotes, logos }: TypeTestimonial) => {
  return (
    <Background background={background}>
      <div className="w-full flex flex-col grid justify-items-center">
        <div className="w-full grid justify-items-center">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{text.title}</h2>
        </div>

        <div className="pt-4 flex flex-row flex-nowrap justify-start overflow-x-scroll">
          {quotes &&
            quotes.map(function (quote, idx) {
              return (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 md:flex md:flex-row md:p-8 items-center">
                  <div className="md:w-2/5">
                    {<img src={ImageUrlFactory.createUrl(quote.illustration)} />}
                  </div>
                  <div className="md:w-3/5 md:pl-8 ">
                    <div>
                      <ReactMarkdown
                        components={{
                          ol: ({ node, ...props }) => (
                            <ol
                              style={{ listStyleType: 'decimal', paddingLeft: '1em' }}
                              {...props}
                            />
                          ),
                        }}>
                        {quote.quote}
                      </ReactMarkdown>
                    </div>
                    <div className="font-bold pt-4">{quote.author}</div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="pt-4 flex flex-wrap items-center">
          {logos &&
            logos.showLogo &&
            logos.logos &&
            logos.logos.map(function (logo, idx) {
              return (
                <div key={idx} className="flex-shrink-0 p-4">
                  <img src={ImageUrlFactory.createUrl(logo)} className="w-28" />
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
