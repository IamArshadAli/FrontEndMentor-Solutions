import NavBar from "./components/NavBar";

import {
  heroDesktopImage,
  heroMobileImage,
  databizClient,
  audiophileClient,
  meetClient,
  makerClient,
} from "./assets/images";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <main className="main">
        <picture className="main__picture">
          <source media="(min-width: 780px)" srcSet={heroDesktopImage} />
          <img
            src={heroMobileImage}
            alt="Hero Image"
            className="main__hero"
          />
        </picture>
        <section className="main__section">
          <h1 className="section__title">
            Make remote work
          </h1>
          <p className="section__description">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="section__cta">
            Learn more
          </button>
          <div className="section__clients">
            <img src={databizClient} alt="Databiz" className="clients__img" />
            <img src={audiophileClient} alt="Audiophile" className="clients__img" />
            <img src={meetClient} alt="Meet" className="clients__img" />
            <img src={makerClient} alt="Maker" className="clients__img" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
