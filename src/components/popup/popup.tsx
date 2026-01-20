'use client'
import Image from "next/image"
import Link from "next/link"
import Script from "next/script";
import { useEffect } from "react";
import { submitFormPopUp } from "../../app/api/telegram";
import { openFormPop } from "@/app/utils";
import { closeFormPop } from "@/app/utils";
export default function Popup() {
    
    return (
        <>
            <div className="form-popup" id = "form-popup">
                <button onClick ={closeFormPop} id = "close-popup" className = "close-popup-pc">&#10006;</button>
                <div className="container">
                    <div className="form-catalog-wrapper form-popup-wrapper">
                        <div className="title-skyline">
                            <div className="title-form-catalog">
                                <h1>Заполните короткую форму</h1>
                                <p>Наши менеджеры свяжутся с вами в течение 60 минут</p>
                            </div>
                            <button onClick ={closeFormPop} id = "close-popup-2" className = "close-popup-mob">&#10006;</button>
                            <img className="skyline-catalog-form" src="/images/skyline-form-catalog.webp" alt=""/>
                        </div>
                        <form className="form" id = "form-form-popup123" onSubmit={submitFormPopUp}>
                            <input type="text" className="input-form" name="name" id="name-popup" placeholder="Ваше имя" required/>
                            <input type="text" className="input-form" name="phone" id="phone-popup" placeholder="+7 (999) 999-99-99" required/>
                            <button type="submit" className = "button form-button">ОТПРАВИТЬ</button>
                        </form>
                        <div className ="success" id="success-popup"></div>
                    </div>
                </div>
            </div>

        </> 
    )
}