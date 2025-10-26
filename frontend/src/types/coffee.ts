export interface Coffee {
  coffee_pk: number;
  name: string;
  origin: string;
  price: number;
  process_method: string;
  roast_date: string;
  seller: string;
  url?: string | null;
  weight: number;
}

export interface CoffeeForm {
  name: string;
  origin: string;
  price: string;
  process_method: string;
  roast_date: string;
  seller: string;
  url: string;
  weight: string;
}
