'use client'
import Image from "next/image"
import Link from "next/link"
import Script from "next/script";
import { useEffect } from "react";
import { submitFormPopupCard } from "../../app/api/telegram";
import styles from "@/styles/sass/card.module.sass";
import { openFormPop } from "@/app/utils";
import { closeFormPop } from "@/app/utils";

interface PopupProps {
    name: string;
    price: string;
    slug: string;
  }

  export default function Popup({ name, price, slug }: PopupProps) {  
    return (
        <>
            <div className={` form-popup ${styles.formpopup}`} id = "form-popup">
                <button onClick = {closeFormPop} id = "close-popup" className = {`close-popup-pc ${styles.popup_close_pc}`}>&#10006;</button>
                <div className="container">
                    <div className={`form-catalog-wrapper form-popup-wrapper ${styles.formPopupWrapper}`}>
                        <div className={`title-skyline ${styles.title_card_popup}`}>
                            <div className={`title-form-catalog ${styles.title_form_catalog_card}`}>
                                <h1>Вы выбрали:</h1>
                                <h1 className={styles.popup_name}>{name}</h1>
                                <p className ={styles.price_popup_card}>{price}</p>
                                <p className ={`${styles.desc_popup_card} ${styles.desc_popup_card_pc}`}>Оставьте заявку и наши менеджеры свяжуться с вами в течение 60 минут</p>
                            </div>
                            <button onClick={closeFormPop} id = "close-popup-2" className = {`close-popup-mob ${styles.popup_close_mob}`}>&#10006;</button>
                            <img className={styles.popup_img} src={`/images/img_cards/${slug}/1.jpeg`} alt=""/>
                            <p className ={`${styles.desc_popup_card} ${styles.desc_popup_card_mob}`}>Оставьте заявку и наши менеджеры свяжуться с вами в течение 60 минут</p>
                        </div>
                        <form className="form" id = "form-form-popup123" onSubmit={(e) => submitFormPopupCard(name, price, e)}>
                            <input type="text" className="input-form" name="name" id="name-popup" placeholder="Ваше имя" required/>
                            <input type="text" className="input-form" name="phone" id="phone-popup" placeholder="+7 (999) 999-99-99" required/>
                            <button type="submit" className = "button form-button">ОТПРАВИТЬ</button>
                        </form>
                        <div className ="success" id="success-popup-card"></div>
                    </div>
                </div>
            </div>

        </> 
    )
}