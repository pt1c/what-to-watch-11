import FilmCard from '../../components/film-card';
import Footer from '../../components/footer';
import Header from '../../components/header';
import UserBlock from '../../components/user-block';
import { FilmType } from '../../types/film-type';

type FilmScreenProps ={
  film: FilmType;
  moreFilms: FilmType[];
}

const getRating = (value: number): string => {
  switch (true) {
    case value >= 0 && value < 3:
      return 'Bad';
    case value >= 3 && value < 5:
      return 'Normal';
    case value >= 5 && value < 8:
      return 'Good';
    case value >= 8 && value < 10:
      return 'Very good';
    case value === 10:
      return 'Awesome';
    default:
      return 'No Rating';
  }
};

export default function FilmScreen({film, moreFilms}: FilmScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header headerClass='film-card__head'>
            <UserBlock />
          </Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="\#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="\#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="\#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{getRating(film.rating)}</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film.description}</p>
                <p className="film-card__director"><strong>{film.director}</strong></p>
                <p className="film-card__starring"><strong>{film.starring.join(',')}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            { moreFilms.map((oneFilm) => <FilmCard key={oneFilm.id} name={oneFilm.name} previewImage={oneFilm.previewImage} />) }
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}