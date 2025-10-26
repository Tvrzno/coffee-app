import type { Coffee } from '../types/coffee';

export const fetchCoffees = async (): Promise<Coffee[]> => {
  const response = await fetch('api/coffees');

  if (!response.ok) {
    throw new Error('Nepodařilo se načíst seznam káv');
  }

  return response.json();
};

export const addCoffee = async (newCoffee: Omit<Coffee, 'coffee_pk'>): Promise<Coffee> => {
  if (
    !newCoffee.name ||
    !newCoffee.origin ||
    !newCoffee.price ||
    !newCoffee.process_method ||
    !newCoffee.roast_date ||
    !newCoffee.seller ||
    !newCoffee.weight
  ) {
    throw new Error('Vyplň všechna pole.');
  }

  const response = await fetch('/api/coffees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCoffee),
  });

  if (!response.ok) {
    throw new Error('Nepodařilo přidat záznam kávy');
  }

  return response.json();
};

export const getCoffeeById = async (id: string): Promise<Coffee> => {
  const response = await fetch(`/api/coffees/${id}`);

  if (!response.ok) {
    throw new Error('Nepodařilo se načíst záznam');
  }

  return response.json();
};
