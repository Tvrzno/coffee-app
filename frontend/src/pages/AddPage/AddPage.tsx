import { HeroSection } from '../../components/HeroSection/HeroSection';
import { Link } from 'react-router';
import './AddPage.scss';

export const AddPage = () => {
  return (
    <main className="addPage">
      <HeroSection title="Co chceš přidat?" variant="brown" />
      <section className="addLinks">
        <Link className="addLinks__link" to="/add/coffee">
          Kafíčko
        </Link>
        <Link className="addLinks__link" to="/add/brew">
          Přípravu
        </Link>
      </section>
    </main>
  );
};
