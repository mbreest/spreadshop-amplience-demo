/* eslint-disable @typescript-eslint/camelcase */
import { Link } from '../link';
import { TypeBlogRoll } from 'lib/types';
import { Background } from '../section/background';
import { Cta } from '../cta';
import { Image } from 'dc-delivery-sdk-js';
import { defaultClientConfig } from 'lib/api';

export const BlogRoll = ({ text, cta, background, topPosts }: TypeBlogRoll) => {
  return (
    <Background background={background}>
      <div className="w-full flex flex-col">
        <div className="w-full grid justify-items-center p-8">
          <h2 className="h0 pt-4 text-3xl font-medium leading-tight text-gray-900">{text.title}</h2>
          <div className="leading-relaxed text-lg text-gray-700 py-6">{text.details}</div>
        </div>
        <div className="w-full grid justify-center">
          <div className="flex flex-row flex-nowrap justify-start overflow-x-scroll">
            {topPosts &&
              topPosts.map(function (post, idx) {
                return (
                  <div
                    key={'article-' + idx}
                    className="pl-4 pr-4 pb-4 flex-shrink-0 w-full md:w-1/3">
                    <img src={new Image(post.illustration, defaultClientConfig).url().build()} />
                    <div className="font-bold">{post.title}</div>
                    <Link {...{ type: 'Blog Post', path: post._meta.deliveryKey }}>
                      <a className="text-yellow-600 underline">Weiterlesen</a>
                    </Link>
                  </div>
                );
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
