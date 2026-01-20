'use client'
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "@/styles/sass/feedback.module.sass";


export default function FeedBacks() {


    return (
        <>  
            <div className = {styles.feedback}>
                <div className = "container">
                    <div className = {styles.title_feedback}>
                        <h1>
                            Видео-отзывы
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
 
                            {

                                <SwiperSlide key={3}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/3b1b86707d8bdce1922655656eb97641/?p=-6kvPLD7sLAgqJtLn-l3TA&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={2}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/77689def987dcd5cfb8f12553bc53606/?p=ZlKkHiNL-iO0bPTcyx-GLg&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={1}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/d80c123fdee198da7bd71280e99b055c/?p=mohyO6WJmDWDFIqostDrDA&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={4}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/9f10fa6adf4a65b08781edecbcbc9b24/?p=c4pNW-TemR-xI4S27VWsHg&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={5}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/777553e3bf21e87d98434a23d0e77ee6/?p=ey0KkODj-7fbbQe0VKiBsQ&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={6}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/1ee5704007369cbc486b537c32502efc/?p=_H1Q11BcAVyHClBlvHIdOg&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={7}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/077e233687753a5033171f49381b922e/?p=ybMJfyIZCYVbSEdOpdSwvA&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={8}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/afa5de5e6d8c333134290fd406f5c22c/?p=04DPL4ZayLzQa0fEn_rIzQ&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={9}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/8569fa7707480308920f3d849c3a3517/?p=bLr5X4ExY8Zk23v_fs6XdQ&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }
                            {
                                <SwiperSlide key={10}>
                                    <iframe className={styles.feedback_video} width="405" height="720" src="https://rutube.ru/play/embed/c2024df572739731334c613da1fb46e8/?p=TvQRGLHyMu0AN71Nv4ZC4g&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay"  allowFullScreen></iframe>
                                </SwiperSlide>
                            }

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