import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import './DetailPage.scss';
import { getCoffeeById } from '../../api/coffeeApi';

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: coffee,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['coffee', id],
    queryFn: () => getCoffeeById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p>Načítám záznam...</p>;
  if (isError) return <p>Nastala chyba při načítání záznamu</p>;
  if (!coffee) return <p>Záznam nenalezen.</p>;

  return (
    <div className="detailPage">
      <HeroSection title={coffee.name} variant="brown" />
    </div>
  );
};
