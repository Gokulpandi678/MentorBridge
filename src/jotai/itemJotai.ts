import { atom } from "jotai";

export interface ItemType {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const itemJotai = atom<ItemType[] | null>(null)