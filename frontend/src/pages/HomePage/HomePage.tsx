import { fetchLastBrews } from '../../api/brewApi';
import { useQuery } from '@tanstack/react-query';
import './HomePage.scss';
import { Link } from 'react-router';

export const HomePage = () => {
  const {
    data: lastBrews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['lastBrews'],
    queryFn: fetchLastBrews,
  });

  if (isLoading) return <p>Načítám záznamy...</p>;
  if (isError) return <p>Nastala chyba při načítání příprav</p>;

  console.log(lastBrews);

  return (
    <main className="homePage">
      <section className="homePage__hero">
        <h1 className="homePage__header">BrewDiary</h1>
      </section>
      <section className="homePage__recordsWrap">
        <h2>Poslední záznamy</h2>
        {lastBrews?.map(brew => (
          <Link className="record" to={`/`}>
            <h2 className="record__name">{brew.note}</h2>
          </Link>
        ))}
      </section>
    </main>
  );
};
