import type { Image } from "./Image.type";

export type AlbumInfo = {
  name: string;
  date: string;
  thumbnail: string;
  id: string;
}

export type Album = {
  info: AlbumInfo;
  description: string;
  photos: Array<Image>;
}
