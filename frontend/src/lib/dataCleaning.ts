import type { CoffeeForm, Coffee } from '../types/coffee';

const trimData = (data: CoffeeForm): CoffeeForm => {
  const trimmed: CoffeeForm = { ...data };
  for (const key in trimmed) {
    const value = trimmed[key as keyof CoffeeForm];
    if (typeof value === 'string') {
      trimmed[key as keyof CoffeeForm] = value.trim();
    }
  }
  return trimmed;
};

const parseData = (data: CoffeeForm): Omit<Coffee, 'coffee_pk'> => {
  const parsed = {
    ...data,
    price: Number(data.price),
    weight: Number(data.weight),
    url: data.url.trim() === '' ? null : data.url,
  };

  return parsed;
};

export const cleanData = (data: CoffeeForm): Omit<Coffee, 'coffee_pk'> => {
  const trimmedData = trimData(data);
  const parsedData = parseData(trimmedData);
  return parsedData;
};
