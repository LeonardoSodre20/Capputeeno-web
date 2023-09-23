export interface IProduct {
  id: number;
  name: string;
  image_url: string;
  price: number;
}

export interface IProductRows {
  listProducts: IProduct[];
}
