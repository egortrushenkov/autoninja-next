import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="body-footer">
                        <div className = "first-footer">
                            <img src="/images/new_logo_footer.svg" alt=""/>
                            <ul className = "pc-list-contacts">
                                <li className="nav-button"><Link href="/">Главная</Link></li>
                                <li className="nav-button"><Link href="/catalog">Каталог</Link></li>
                                <li className="nav-button"><a href="https://auc.auto-ninja.ru/">Аукцион</a></li>
                                <li className="nav-button"><Link href="/online-form">Онлайн-подбор</Link></li>
                                <li className="nav-button"><Link href="/#stages">Этапы покупки</Link></li>
                                <li className="nav-button"><Link href="/#dop-services">Дополнительный сервис</Link></li>
                                <li className="nav-button"><a href="#contacts">Контакты</a></li>
                            </ul>
                            <a href="#menu"><img className = "arrow-footer" src="/images/arrow-footer.png" alt=""/></a>
                        </div>
                        <ul className = "mob-list-contacts">
                            <li className="nav-button"><Link href="/">Главная</Link></li>
                            <li className="nav-button"><Link href="/catalog">Каталог</Link></li>
                            <li className="nav-button"><a href="https://auc.auto-ninja.ru/">Аукцион</a></li>
                            <li className="nav-button"><Link href="/online-form">Онлайн-подбор</Link></li>
                            <li className="nav-button"><Link href="/#stages">Этапы покупки</Link></li>
                            <li className="nav-button"><Link href="/#dop-services">Дополнительный сервис</Link></li>
                            <li className="nav-button"><a href="#contacts">Контакты</a></li>
                        </ul>
                        <div className = "whats-contacts">
                            <div className="whats-app">
                                <a className = "button-dop" href="https://wa.me/79242488665"><img src="/images/icon-whatsapp.webp" alt=""/>WhatsApp</a>
                            </div>
                            <a href="tel:+79242488665" className = "tel-footer">+7 924 248-86-65</a>
                        </div>
                    </div>
                    <div className = "down-footer">
                        <Link className="link_policy" href="/policy">Политика в отношении обработки персональных данных</Link>
                        <p>©2023-2025. Все права защищены</p>
                    </div>
                </div>
            </div>

        </> 
    )
}