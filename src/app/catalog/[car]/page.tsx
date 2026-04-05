import * as React from 'react';
import Menu from "@/components/menu/menu";
import FormNotFound from "@/components/form_notcar/form_notcar";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import PopupCard from "@/components/popup_card/popup_card";
import SwiperPage from "@/app/catalog/[car]/swiper";
import { notFound } from "next/navigation";
import styles from "@/styles/sass/card.module.sass";
import Link from 'next/link';
import ButtonPopup from '@/app/catalog/[car]/buttonpopup';
import type { Metadata } from "next";
import { SchemaOrgProductPage, SchemaOrgBreadcrumbs } from "@/components/seo/SchemaOrg";

const fetchData = async() => {
  const response = await fetch('https://script.google.com/macros/s/AKfycbyIxKvBUAIufdDs9VZegCyjllZXYDXR-0mXdmNzYObPeZyDqpf59sOiXiGgz2WFJLJf/exec', {
    cache: 'force-cache',
    next: { revalidate: 3600 }
  })
  const data = await response.json()
  return data['users'] || []
}

export async function generateStaticParams() {
  const cars = await fetchData();
  return cars.map((car: { Slug: string }) => ({
    car: car.Slug,
  }));
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params;
  const cars = await fetchData();
  
  const car = cars.find((c: { Slug: string }) => c.Slug === params.car);
  if (!car) return { title: 'Автомобиль не найден' };

  const { Name, Price, Main_photo, Engine, Drive, Year } = car;
  
  return {
    title: `${Name} | Купить авто из Японии - AUTONINJA`,
    description: `${Name} ${Year}. Цена: ${Price}. ${Engine}, ${Drive}. Доставка по всей России за 10 дней.`,
    keywords: `${Name}, ${Year}, купить авто, доставка, Япония, Корея, Китай`,
    openGraph: {
      type: 'website',
      url: `https://автонинзя.рф/catalog/${params.car}`,
      title: `${Name} | AUTONINJA`,
      description: `${Name} ${Year} - ${Price}`,
      siteName: 'AUTONINJA',
      images: [{
        url: Main_photo,
        width: 1200,
        height: 630,
        alt: Name,
      }],
    },
  };
}

export default async function CarPage(props: any) {
  const params = await props.params;
  const cars = await fetchData();

  const car = cars.find((c: { Slug: string }) => c.Slug === params.car);
  if (!car) notFound();

  const Slug = car.Slug;
  const Name = car.Name;
  const Engine = car.Engine;
  const Power = car.Power;
  const Acceleration = car.Acceleration;
  const Box = car.Box;
  const Drive = car.Drive;
  const Dimensions = car.Dimensions;
  const Torque = car.Torque;
  const Tire_size = car.Tire_size;
  const Price = car.Price;
  const Main_photo = car.Main_photo;
  const Country = car.Country;
  const Year = car.Year;

  const carData = { Name, Slug, Price, Main_photo, Engine, Drive, Year };

  return (
    <>
      <SchemaOrgProductPage car={carData} />
      <SchemaOrgBreadcrumbs carName={Name} slug={Slug} />
      <Menu />
      <PopupCard name = {Name} price = {Price} slug ={Slug}/>

      <div className={styles.card_cars}>
        <div className = "container">
            <Link className = {styles.back_catalog} href="/catalog/">
              <img src="/images/arrow_card.webp" alt="" />
              <p>Вернуться назад</p>
            </Link>
            <div className={styles.title_card}>
              <h1>Автомобиль {Name}</h1>
              <p className = {styles.year_card}>{Year}</p>
            </div>
            <div className={styles.body_card}>
              <div className = {styles.body_wrapper}>
                <SwiperPage slug={Slug}/>
                <div className = {styles.about_car}>
                  <p className={styles.title}>Основные характеристики</p>
                  <div className={styles.about_wrapper}>
                      <ul className = {styles.about_content_items}>
                        <div className={styles.item_left}>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/images/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Двигатель:</p>
                              <p className={styles.item_description}>{Engine}</p>
                            </div>
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/images/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Разгон до 100 км/ч:</p>
                              <p className={styles.item_description}>{Acceleration}</p>
                            </div>
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/images/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Привод:</p>
                              <p className={styles.item_description}>{Drive}</p>
                            </div>
                              
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/images/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Крутящий момент:</p>
                              <p className={styles.item_description}>{Torque}</p>
                            </div>
                          </li>
                        </div>
                        <div className = {styles.item_right}>

                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/images/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Мощность:</p>
                              <p className={styles.item_description}>{Power}</p>
                            </div>
                            
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/images/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Коробка:</p>
                              <p className={styles.item_description}>{Box}</p>
                            </div>
                            
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/images/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Габариты:</p>
                              <p className={styles.item_description}>{Dimensions}</p>
                            </div>
                            
                          </li>
                          <li className = {styles.item_about}>
                            <img className = {styles.item_about_dote} src="/images/card_img/list-img.svg" alt="" />
                            <div>
                              <p className={styles.item_title}>Размер шин:</p>
                              <p className={styles.item_description}>{Tire_size}</p>
                            </div>
                            
                          </li>
                        </div>
                        
                        
                      </ul>
                  </div>
                  <div className = {styles.price_content}>
                    <p className = {styles.price_title}>Стоимость</p>
                    <p className ={styles.price}>{Price}</p>
                    <p className = {styles.price_desc}>Точная стоимость зависит от выбранной комплектации. Для уточнения стоимости свяжитесь с нами</p>
                    <ButtonPopup/>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <FormNotFound />
      <Contacts />
      <Footer />
    </> 
  );
}