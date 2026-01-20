'use client'
import Image from "next/image"
import Link from "next/link"
import Script from "next/script";
import { useEffect } from "react";
import { submitFormCard } from "../../app/api/telegram";

export default function Popup() {
    
    return (
        <>
            <div className="form-catalog" id = "form-catalog">
                <div className="container">
                    <div className="form-catalog-wrapper form-popup-wrapper">
                        <div className="title-skyline">
                            <div className="title-form-catalog">
                                <h1>Не нашли подходящий авто?</h1>
                                <p>Оставьте заявку на индивидуальный подбор автомобиля под ваш запрос и бюджет</p>
                            </div>
                            <img className="skyline-catalog-form" src="/images/skyline-form-catalog.webp" alt=""/>
                        </div>
                        <form className="form" id = "form-form-popup123" onSubmit={submitFormCard}>
                            <input type="text" className="input-form" name="name-formNotCar" id="name-popup" placeholder="Ваше имя" required/>
                            <input type="text" className="input-form" name="phone-formNotCar" id="phone-popup" placeholder="+7 (999) 999-99-99" required/>
                            <button type="submit" className = "button form-button">ОТПРАВИТЬ</button>
                        </form>
                        <div className ="success" id="success-popup"></div>
                    </div>
                </div>
            </div>

        </> 
    )
}