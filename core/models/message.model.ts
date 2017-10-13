import { Chat } from './chat.model';
import { Contact } from './contact.model';
import { SentStatus } from './sent-status.model';

export class Message {
  id?: number;
  text: string = '';
  chat: Chat;
  sender: Contact;
  readonly created: number = Date.now();
  sent: SentStatus;

  toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
}
