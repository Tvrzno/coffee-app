import { useState } from 'react';
import '../forms.scss';
import type { CoffeeForm, Coffee } from '../../../types/coffee';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Button } from '../../ui/Button/Button';
import { addCoffee } from '../../../api/coffeeApi';
import { cleanData } from '../../../lib/dataCleaning';
import { FormInput, FormSelect } from '../FormParts';

export const AddCoffeeForm = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<CoffeeForm>({
    name: '',
    origin: '',
    price: '',
    process_method: '',
    roast_date: '',
    seller: '',
    url: '',
    weight: '',
  });

  const mutation = useMutation({
    mutationFn: (newCoffee: Omit<Coffee, 'coffee_pk'>) => addCoffee(newCoffee),
    onSuccess: newCoffee => {
      queryClient.setQueryData<Coffee[]>(['coffees'], old =>
        old ? [...old, newCoffee] : [newCoffee]
      );
      toast.success('Káva byla přidána!');
      setFormData({
        name: '',
        origin: '',
        price: '',
        process_method: '',
        roast_date: '',
        seller: '',
        url: '',
        weight: '',
      });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Něco se pokazilo při přidávání kávy.');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanedData = cleanData(formData);

    mutation.mutate(cleanedData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="form__wrap" aria-label="Informace o kávě">
        <FormInput
          type="text"
          placeholder="Jak se káva jmenuje?"
          name="name"
          value={formData.name}
          handleChange={handleInputChange}
        >
          Název
        </FormInput>

        <FormInput
          type="text"
          placeholder="Odkud káva pochází?"
          name="origin"
          value={formData.origin}
          handleChange={handleInputChange}
        >
          Původ
        </FormInput>

        <FormSelect
          name="process_method"
          value={formData.process_method}
          options={[
            { value: 'natural', name: 'Natural' },
            { value: 'washed', name: 'Washed' },
          ]}
          handleChange={handleInputChange}
        >
          Metoda zpracování
        </FormSelect>

        <FormInput
          type="date"
          placeholder="Kdy byla káva upražená?"
          name="roast-date"
          value={formData.roast_date}
          handleChange={handleInputChange}
        >
          Datum pražení
        </FormInput>

        <FormInput
          type="text"
          placeholder="Kde je káva koupená?"
          name="seller"
          value={formData.seller}
          handleChange={handleInputChange}
        >
          Prodejce
        </FormInput>

        <FormInput
          type="number"
          placeholder="Kolik káva stála?"
          name="price"
          value={formData.price}
          handleChange={handleInputChange}
        >
          Cena
        </FormInput>

        <FormInput
          type="number"
          placeholder="Jaké mám množství kávy?"
          name="weight"
          value={formData.weight}
          handleChange={handleInputChange}
        >
          Gramáž
        </FormInput>

        <FormInput
          type="text"
          placeholder="Odkaz na kávu."
          name="url"
          value={formData.url}
          handleChange={handleInputChange}
        >
          Odkaz
        </FormInput>
      </fieldset>

      <Button>Přidat kafíčko</Button>
    </form>
  );
};
