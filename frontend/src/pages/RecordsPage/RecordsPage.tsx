import { useQuery } from '@tanstack/react-query';
import { fetchCoffees } from '../../api/coffeeApi';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Record } from '../../components/Record/Record';
import './RecordsPage.scss';

export const RecordsPage = () => {
  const {
    data: coffees,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['coffees'],
    queryFn: fetchCoffees,
  });

  if (isLoading) return <p>Načítám záznamy...</p>;
  if (isError) return <p>Nastala chyba při načítání káv ☕</p>;

  console.log(coffees);

  return (
    <main className="recordsPage">
      <HeroSection title="Mé záznamy" variant="white" />
      <section className="records">
        {coffees?.map(coffee => (
          <Record key={coffee.coffee_pk} coffee={coffee} />
        ))}
      </section>
    </main>
  );
};
