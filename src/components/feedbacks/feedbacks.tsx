'use client'
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "@/styles/sass/feedback.module.sass";

const slide_feedback = () => {
    return Array.from({ length: 15 }, (_, i) => (
        <SwiperSlide key={i + 1}>
            <img className={styles.img_feedback} src={`/images/feedbacks/feedback_${i + 1}.png`} alt="" />
        </SwiperSlide>
    ));
}

export default function FeedBacks() {


    return (
        <>  
            <div className = {styles.feedback}>
                <div className = "container">
                    <div className = {styles.title_feedback}>
                        <h1>
                            Отзывы<br/>довольных клиентов
                        </h1>
                        <div className={`${styles.buttons_card_pc} ${styles.buttons_card}`}>
                            <div className= {`nav-button card-slider-button-prev card-button ${styles.button_feedback}`}>
                                <img src="/images/Arrow-left.webp" alt="" />
                            </div>
                            <div className={`nav-button card-slider-button-next card-button ${styles.button_feedback}`}>
                                <img src="/images/Arrow-right.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className = {styles.swiper_wrapper_feed}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            navigation={{
                                nextEl: ".card-slider-button-next",
                                prevEl: ".card-slider-button-prev",
                            }}
                            height={500}
                            slidesPerView={3.4}
                            spaceBetween={10}
                            breakpoints={
                                {
                                    100:{
                                        slidesPerView: 1,
                                    },

                                    700:{
                                        slidesPerView: 1,
                                    },
                                    1000:{
                                        slidesPerView: 3.4,
                                    },
                                    1500:{
                                        slidesPerView: 5.4,
                                    }
                                }
                            }
                            loop={true}
                        >
                            {/* Выводим отзывы */}
                            {slide_feedback()} 

                        </Swiper>
                            <div className={styles.buttons_card_mob}>
                                <div className= {`nav-button card-slider-button-prev card-button ${styles.button_feedback}`}>
                                    <img src="/images/Arrow-left.webp" alt="" />
                                </div>
                                <div className={`nav-button card-slider-button-next card-button ${styles.button_feedback}`}>
                                    <img src="/images/Arrow-right.webp" alt="" />
                                </div>
                            </div>     
                    </div>

            </div>

        </>
    );
}