import Image from "next/image"

export default function Contacts() {

    return (
        <>
            <div className="contacts" id = "contacts">
                <div className="container">
                    <h1>КОНТАКТЫ</h1>
                    <ul className = "list-contacts">
                        <li><h3 className = "tel-contacts"><a href="tel:+79242488665">+7 924 248-86-65</a></h3></li>
                        <li><h3><a href="mailto:Zakhar@ninjaauto.ru">Zakhar@ninjaauto.ru</a></h3></li>
                        <li>
                            <div>
                                <a href="https://wa.me/79242488665" className="button"><img src="/images/icon-svg/whatsapp.webp" alt=""/></a>
                                <a href="https://www.youtube.com/@auto_ninja" className="button"><img src="/images/icon-svg/youtube.webp" alt=""/></a>
                                <a href="https://t.me/auto_ninja" className="button"><img src="/images/icon-svg/tg.webp" alt=""/></a>
                            </div>
                        </li>
                    </ul>
                    <div className="list-map-contacts">
                        <div>
                            <p className="list-map-title-address" style = {{marginBottom: 16}}>ЖК Magnum Grand Palace.</p>
                            <p>Улица Володарского 1, Офис 11202, 2 этаж, первая башня</p>
                        </div>
                        <iframe className="map-yandex" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7f394af19fcbe8663e94a589e576b1496b119b05cd505690521467e403c9c676&amp;source=constructor" height={600}></iframe>

                    </div>
                </div>
            </div>

        </> 
    )
}