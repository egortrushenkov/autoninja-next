import Image from "next/image"

export default function Advantages() {

    return (
        <>
            <div className="advantages" id = "advantages">
                <div className="container">
                    <h1>НАМ МОЖНО ДОВЕРЯТЬ</h1>
                    <div className="body-advantages">
                        <div className="block-adv">
                            <div className="img-text">
                                <img src="/images/icon-adv/icon-1.webp" alt=""/>
                                <h1>9 ЛЕТ ОПЫТА В ЯПОНСКОЙ КОМПАНИИ</h1>
                            </div>
                            <p>Ваши заявки персонально обрабатывает владелец компании с колоссальным опытом импорта авто</p>
                        </div>
                        <div className="block-adv">
                            <div className="img-text">
                                <img src="/images/icon-adv/icon-2.webp" alt=""/>
                                <h1>Индвидуальный подход</h1>
                            </div>
                            <p>Не важно какой у вас бюджет и предпочтения по авто, мы найдём для вас лучший вариант и доставим к указанному месту</p>
                        </div>
                        <div className="block-adv">
                            <div className="img-text">
                                <img src="/images/icon-adv/icon-3.webp" alt=""/>
                                <h1>Прозрачность сделки</h1>
                            </div>
                            <p>Прописываем все условия и во время работы не добаляем не обговоренные проценты по комисиии</p>
                        </div>
                        <div className="block-adv">
                            <div className="img-text">
                                <img src="/images/icon-adv/icon-4.webp" alt=""/>
                                <h1>Гарантия безопасности</h1>
                            </div>
                            <p>Страхуем автомобиль на каждом этапе транспортировки </p>
                        </div>
                        <div className="block-adv block-adv-full">
                            <div className="img-text">
                                <img src="/images/icon-adv/more.png" alt=""/>
                                <h1>большой выбор</h1>
                            </div>
                            <p>Помимо обычных авто, мы можем пригнать для вас санкционные автомобили. Абосюлютно любой объем двигателя, любой электрокар, любой гибрид. Какой авто вы захотите - такой и пригоним!</p>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}