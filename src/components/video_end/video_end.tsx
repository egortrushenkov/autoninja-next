'use client'
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "@/styles/sass/video.module.sass";


export default function VideoEnd() {

    return (
        <>  
            <div className = {styles.video}>
                <div className="container">
                    <div className={styles.video_title}>
                        <h1 className={styles.video_title_h1}>итоги 2024 года</h1>
                        <p>Посмотрите видео и убедитесь в нашей компетенции</p>
                    </div>
                    <div className={styles.video_end}>
                        <iframe className={styles.video_full} width="100%" height="700" src="https://rutube.ru/play/embed/277f57b32cfa2789831ed82a51748454/?p=HBABP4RI5FpW8BB1X3RyTg&skinColor=5e35b1" frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen></iframe>
                    </div>
                </div>
            </div>

        </>
    );
}