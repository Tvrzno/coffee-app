import './HeroSection.scss';

interface HeroSectionProps {
  title: string;
  variant: 'brown' | 'white';
}

export const HeroSection = ({ title, variant }: HeroSectionProps) => {
  return (
    <header className={`hero hero--${variant}`}>
      <h1 className={`hero__heading hero__heading--${variant}`}>{title}</h1>
      {variant === 'brown' ? <div className="hero__background"></div> : null}
    </header>
  );
};
