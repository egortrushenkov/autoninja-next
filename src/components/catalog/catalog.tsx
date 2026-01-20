'use client'
import Image from "next/image";
import Link from 'next/link';
import { notFound } from "next/navigation";
import { MouseEvent } from 'react';
import "@/styles/sass/main.sass";


const tubActive = (e: MouseEvent<HTMLButtonElement>) => {
  const tubs_all = document.querySelectorAll(`.tabs-trigger__item`);
  for (let i = 0; i < tubs_all.length; i++) {
    tubs_all[i].classList.remove("tabs-trigger__item--active");
  }
  if (e.target) {
    const target = e.target as HTMLElement; // type assertion
    target.classList.add('tabs-trigger__item--active');
  }
}


const tadAllOff = () => {
  const cars_all = document.querySelectorAll(`.catalog-auto-item`);
  for (let i = 0; i < cars_all.length; i++) {
    cars_all[i].classList.remove("active-auto");
    cars_all[i].classList.add("non-active-auto");
  }
}

const tadAllOn = (e: MouseEvent<HTMLButtonElement>) => {
  const cars_all = document.querySelectorAll(`.catalog-auto-item`);
  for (let i = 0; i < cars_all.length; i++) {
    cars_all[i].classList.remove("non-active-auto");
    cars_all[i].classList.add("active-auto");
  }
  tubActive(e);
}


const tabFunc = (country: string, e: MouseEvent<HTMLButtonElement>) => {
  tadAllOff();
  const cars_country = document.querySelectorAll(`.${country}`);
  for (let i = 0; i < cars_country.length; i++) {
    if (cars_country[i].classList.contains("non-active-auto")) {
      cars_country[i].classList.remove("non-active-auto");
      cars_country[i].classList.add("active-auto");
    }else {
      cars_country[i].classList.add("active-auto");
    }
  }
  tubActive(e);
}


export default function Catalog(cars: { cars: any[] }) {

  if (!cars) notFound();
  return (
    <div className="catalog">
      <div className="container">
        <h1>Каталог автомобилей</h1>
        <div className="tabs">
          <div className="tabs-trigger">
            <button className="tabs-trigger__item tabs-trigger__item--active" onClick={(e) => tadAllOn(e)}>Все авто</button>
            <button className="tabs-trigger__item" onClick={(e) => tabFunc('japan', e)}>Авто из Японии</button>
            <button className="tabs-trigger__item" onClick={(e) => tabFunc('korea', e)}>Авто из Кореи</button>
            <button className="tabs-trigger__item" onClick={(e) => tabFunc('china', e)}>Авто из Китая</button>
            <button className="tabs-trigger__item" onClick={(e) => tabFunc('allwant', e)}>Авто, которые хотят все</button>
          </div>
          <div className="tabs-content">
            <div className="tabs-content__item">
                  {cars['cars'] && cars['cars'].map(({ IdCar, Slug, Name, Engine, Power, Box, Drive, Price, Year, Main_photo, Country, Brand }) => (
                    <>
                        <div className={`content-item active-auto catalog-auto-item car-${IdCar} ${Slug} ${Country} ${Brand}`} id={`catalog-${Slug}`}>

                            <div className="catalog__title-auto">
                                <img className = "catalog__logo-auto" src={`/images/logo-auto/${Brand}.png`} alt=""/>
                                <div>
                                    <h3>{Name}</h3>
                                    <p>{Year}</p>
                                </div>
                            </div>
                            <img className = "catalog__auto-img" src={`/images/img-auto/${Slug}.webp`} alt=""/>
                            <div className="catalog__char">
                                <ul>
                                    <li>
                                        <img className = "char-logo" src="/images/icon-auto/motor.webp" alt=""/>
                                        <div>
                                            <h4>Двигатель</h4>
                                            <p>{Engine}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img className = "char-logo" src="/images/icon-auto/power.webp" alt=""/>
                                        <div>
                                            <h4>Мощность</h4>
                                            <p>{Power}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img className = "char-logo" src="/images/icon-auto/transmition.webp" alt=""/>
                                        <div>
                                            <h4>Коробка</h4>
                                            <p>{Box}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img className = "char-logo" src="/images/icon-auto/drivu_unit.webp" alt=""/>
                                        <div>
                                            <h4>Привод</h4>
                                            <p>{Drive}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="down-content">
                                <h3>{Price}</h3>
                                <Link href={`/catalog/${Slug}`} className="button">Подробнее</Link>
                            </div>
                            
                        </div>
                    </>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}