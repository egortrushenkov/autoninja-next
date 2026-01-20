
import Image from "next/image"
import Link from "next/link"

export default function Header() {

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="blocks-header">
                        <div className="left-block">
                            <img className = "bg-left-block" src="/images/header.webp" alt=""/>
                            <h1>Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии</h1>
                            <div className="smile-block">
                                <img className = "smile1" src="/images/prem1.svg" alt=""/>
                                <img className = "smile2" src="/images/prem2.svg" alt=""/>
                                <img className = "smile2 smile3" src="/images/prem3.svg" alt=""/>
                            </div>
                            <Link href="/catalog" className = "button button-header-pc">
                                <div className = "button-inside">
                                    <p>Заказать <br/> авто</p>
                                    <img src="/images/arrow-button.webp" alt=""/>
                                </div>
                            </Link>
                        </div>
                        <div className="right-block-header"><img src="/images/zahar.webp" alt=""/></div>
                    </div>
                    
                </div>
            </div>

            <div className="header-mobile">
                <div className="container">
                    <div className="first-block">
                        <h1>Доставка авто из Кореи, Японии и Китая от 10 дней по всей россии</h1>
                        <div className="smile-block2">
                            <img className = "smile1" src="/images/prem1.svg" alt=""/>
                            <img className = "smile2" src="/images/prem2.svg" alt=""/>
                            <img className = "smile2 smile3" src="/images/prem3.svg" alt=""/>
                        </div>
                    </div>
                    <Link href="/catalog" className = "button button-header-mob">
                        <div className = "button-inside">
                            <p>Заказать авто</p>
                            <img src="/images/arrow-button.webp" alt=""/>
                        </div>
                    </Link>
                    <div className="header-img-mobile"><img src="/images/zahar.webp" alt=""/></div>
                </div>
            </div>
        </> 
    )

}