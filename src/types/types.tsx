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
