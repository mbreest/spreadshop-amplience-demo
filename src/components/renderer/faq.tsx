/* eslint-disable @typescript-eslint/camelcase */
import { TypeFAQ } from 'lib/types';
import { Cta } from 'components/cta';
import { Accordion, AccordionItem, AccordionPanel } from 'components/accordion';
import { Background } from '../section/background';
import ReactMarkdown from 'react-markdown';

export const FAQ = ({ text, background, entries, questions }: TypeFAQ) => {
  return (
    <Background background={background}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center">
          <h1 className="pt-4 text-3xl font-medium leading-tight text-gray-900">{text?.title}</h1>
        </div>
        <Accordion>
          {entries.map(function (entry, idx) {
            return (
              <>
                <AccordionItem toggle={'section-' + idx}>{entry.seo.title}</AccordionItem>
                <AccordionPanel id={'section-' + idx}>
                  <ReactMarkdown
                    components={{
                      h1: ({ node, ...props }) => (
                        <h1
                          className="h1 pt-4 text-3xl font-medium leading-tight text-gray-900"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="h2 pt-4 text-2xl pb-4 font-medium leading-tight text-gray-900"
                          {...props}
                        />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          className="h3 pt-4 text-1xl font-medium leading-tight text-gray-900"
                          {...props}
                        />
                      ),
                      a: ({ node, ...props }) => (
                        <a className="text-yellow-600 underline" {...props} />
                      ),
                      ol: ({ node, ...props }) => <ol className="list-decimal pl-6" {...props} />,
                      ul: ({ node, ...props }) => <ul className="list-disc pl-6" {...props} />,
                    }}>
                    {entry.article?.text}
                  </ReactMarkdown>
                </AccordionPanel>
              </>
            );
          })}
        </Accordion>
        <div className="grid justify-items-center">
          <div className="leading-relaxed text-lg text-gray-700 py-6">{questions?.title}</div>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{questions?.description}</div>
          <div className="flex flex-row">
            {questions?.cta1 && (
              <div className="pr-4">
                <Cta cta={questions.cta1} />
              </div>
            )}
            {questions?.cta2 && (
              <div>
                <Cta cta={questions.cta2} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Background>
  );
};
