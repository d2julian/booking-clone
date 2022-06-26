export type destinationsInfoItem = {
  id: number;
  imgSrc: string;
  city: string;
  hotels: number;
};

export type destinationsInfoArray = destinationsInfoItem[];

export interface destinationsInfoProp {
  props: destinationsInfoItem;
}

export type hotelResultItem = {
  id: number;
  name: string;
  rating: string;
  score: number;
  stars: number;
  imgSrc: string;
  price: number;
  breakFast?: string;
  info: string;
};

export type hotelResultItemArray = hotelResultItem[];

export interface hotelResultProp {
  props: hotelResultItem;
}
