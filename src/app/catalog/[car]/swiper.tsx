'use client'
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "@/styles/sass/card.module.sass";
import { useEffect, useState } from 'react';

const parseImg = (slugIMG: string) => {
  const promises = [];
  for (let i = 2; i <= 12; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const imgSrc = `/images/img_cards/${slugIMG}/${i}.jpeg`;
        const controller = new AbortController();
        const signal = controller.signal;
        const timeoutId = setTimeout(() => {
          controller.abort();
        }, 1000);

        fetch(imgSrc, { method: 'HEAD', mode: 'same-origin', signal })
          .then((response) => {
            clearTimeout(timeoutId);
            if (response.ok) {
              const img = new Image();
              img.src = imgSrc;
              img.onload = () => {
                resolve(
                  <SwiperSlide key={i}>
                    <img className={styles.img_slider} src={imgSrc} alt="" />
                  </SwiperSlide>
                );
              };
            } else {
              resolve([]); // Return an empty array if the image doesn't exist
            }
          })
          .catch((error) => {
            if (error.name === 'AbortError') {
              resolve([]); // Return an empty array if the fetch request timed out
            } else {
              reject(error);
            }
          });
      })
    );
  }
  return Promise.all(promises).then((slides) => slides.flat()); // flat() to remove empty arrays
};


export default function SwiperPage({ slug }: { slug: string }) {
  const [slides, setSlides] = useState<any[]>([]);

  useEffect(() => {
    parseImg(slug).then((slides) => setSlides(slides));
  }, [slug]);

  return (
    <>
      <div className={styles.wrapper_slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: ".card-slider-button-next",
            prevEl: ".card-slider-button-prev",
          }}
          slidesPerView={'auto'}
          loop={true}
        >
          <SwiperSlide key = "1">
            <img className={styles.img_slider} src={`/images/img_cards/${slug}/1.jpeg`} alt="" />
          </SwiperSlide>
          {slides} {/* ADD OTHER SLIDES */}
        </Swiper>
        <div className={styles.buttons_card}>
          <div className="nav-button card-slider-button-prev card-button">
            <img src="/images/Arrow-left.webp" alt="" />
          </div>
          <div className="nav-button card-slider-button-next card-button">
            <img src="/images/Arrow-right.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}