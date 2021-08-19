import { Image } from 'dc-delivery-sdk-js';
import { defaultClientConfig } from './api';
import { TypeImage } from './types';

export class ImageUrlFactory {
  public static createUrl(config: TypeImage): string {
    if (config.name.endsWith('-svg')) {
      return 'https://spreadshirt_poc.a.bigcontent.io/v1/static/' + config.name;
    } else {
      return new Image(config, defaultClientConfig).url().build();
    }
  }
}
