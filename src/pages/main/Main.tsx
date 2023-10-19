import React from 'react';
import HeroCard from '../../components/HeroCard';
import Card from '../../components/Card';

type HeroCardProps = {
  title:string;
  year:number;
  genre:string;
}


export default function Main({genre,title,year}:HeroCardProps): JSX.Element {
  return (<React.Fragment><meta charSet="UTF-8" />
    <title>WTW</title>
    <meta name="robots" content="noindex, nofollow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="css/main.min.css" />
    <HeroCard genre={genre} title={title} year={year}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">
            All genres
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Comedies
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Crime
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Documentary
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Dramas
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Horror
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Kids &amp; Family
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Romance
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Sci-Fi
            </a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">
            Thrillers
            </a>
          </li>
        </ul>
        <div className="catalog__films-list">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="catalog__more">
          <button className="catalog__button" type="button">
          Show more
          </button>
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div></React.Fragment>);
}
