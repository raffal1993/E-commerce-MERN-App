export interface Filters {
  color?: 'White' | 'Black' | 'Red' | 'Blue' | 'Yellow' | 'Green';
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL';
}
export type Sort = 'Newest' | 'Asc' | 'Desc';

export interface Product {
  _id: string;
  title: string;
  desc: string;
  img: string;
  categories?: string[];
  size?: string[];
  color?: string[];
  price: number;
  isStock: boolean;
  createdAt: string;
}
