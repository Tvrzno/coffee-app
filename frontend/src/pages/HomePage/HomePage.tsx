import './HomePage.scss';

export const HomePage = () => {
  return (
    <main className="homePage">
      <section className="homePage__hero">
        <h1 className="homePage__header">BrewDiary</h1>
      </section>
      <section className="homePage__recordsWrap">
        <h2>Poslední záznamy</h2>
      </section>
    </main>
  );
};
