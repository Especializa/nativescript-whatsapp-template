import { Contact } from './contact.model';

export class Chat {
  id?: number;
  contact: Contact;
  type: string;
  when: number;
  muted: boolean;
  unread: number;
  text: string;
}
