import { Message } from './message.model';

export class ImageMessage extends Message {
  url: string = '';
  thumbnail: string = '';

  /**
   * Method overriden
   * @returns String
   */
  toString(): string {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}
