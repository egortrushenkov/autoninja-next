import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/sass/auction.module.sass"
export default function Auc() {

    return (
        <>
            <div className="auc">
                <div className="container">
                    <div className={`${styles.wrapper_auc}`}>
                        <div className={`${styles.desc_auc}`}>
                            <h1>У нас на сайте появился раздел “Аукцион”</h1>
                            <div className={`info-auc ${styles.info_auc}`}>
                                <p>Переходи на страницу с аукционом и смотри какие автомобили можно купить прямо сейчас!</p>
                                <img className = {styles.img_auction_mob} src="/images/auction_img.webp" alt="" />
                                <a className={`button button_2 button-header-mob auc-btn ${styles.auc_btn}`} href="https://auc.auto-ninja.ru/">
                                    <span>Перейти на аукцион</span>
                                    <img src="/images/arrow-auc.svg" alt=""/>
                                </a>
                            </div>
                        </div>
                        <img className = {styles.img_auction_pc} src="/images/auction_img.webp" alt="" />
                    </div>

                </div>
            </div>
        </> 
    )
}