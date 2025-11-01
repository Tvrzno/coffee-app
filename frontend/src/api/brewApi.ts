import type { Brew } from '../types/brews';

export const fetchLastBrews = async (): Promise<Brew[]> => {
  const response = await fetch('api/last_5_joined_brews');

  if (!response.ok) {
    throw new Error('Nepodařilo se načíst přípravy');
  }

  return response.json();
};
