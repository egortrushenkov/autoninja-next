'use client'
import Image from "next/image";
import Popup from "../popup/popup";
import { openFormPop } from "@/app/utils";
import { closeFormPop } from "@/app/utils";
export default function Stages() {

    return (
        <>
            <Popup />
            
            <div className="stages" id = "stages">
                <div className="container">
                    <div>
                        <ul className = "stages-list">
                            <h1>Этапы покупки авто</h1>
                            <li className = " items-stage img-stage">
                                <img src="/images/stages.png" alt=""/>
                            </li>
                            <li className = "items-stage">
                                <div className="title-stage">
                                    <h3>Бесплатная консультация</h3>
                                    <span>01.</span>
                                </div>
                                <p>Консультируем и подбираем вам лучший вариант авто исходя из вашего бюджета и предпочтений</p>
                            </li>
                            <li className = "items-stage">
                                <div className="title-stage">
                                    <h3>Заключение договора</h3>
                                    <span>02.</span>
                                </div>
                                <p>После выбора авто и согласование условий подписываете договор и вносите задаток за работу</p>
                            </li>
                            <li className = "items-stage">
                                <div className="title-stage">
                                    <h3>Покупка <br/> авто</h3>
                                    <span>03.</span>
                                </div>
                                <p>Оплачиваете машину любым удобным для вас способом - от банковской карты до криптовалюты</p>
                            </li>
                            <li className = "items-stage">
                                <div className="title-stage">
                                    <h3>Финальный расчет</h3>
                                    <span>04.</span>
                                </div>
                                <p>Вносите последний платеж авто и мы производим растаможивание вашего автомобиля</p>
                            </li>
                            <li className = "items-stage">
                                <div className="title-stage">
                                    <h3>Доставка машины</h3>
                                    <span>05.</span>
                                </div>
                                <p>Доставляем автомобиль прямо к дому в вашем городе. Безопасная и быстрая доставка в указанное вами место</p>
                            </li>
                            <button onClick = {openFormPop} className = "button button_2 button-header-mob">
                                <div className = "button-inside button-inside-2">
                                    <p>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</p>
                                    <img draggable="false" src="/images/arrow-button.webp" alt=""/>	
                                </div>
                            </button>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </> 
    )
}