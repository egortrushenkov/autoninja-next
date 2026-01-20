'use client'
import Image from "next/image"
import Link from "next/link"
export default function Menu() {
    const openMenu = () => {
        const menu = document.getElementById("submenu");
        if (menu) {
          menu.style.display = "block";
        }
      }
      
      const closeMenu = () => {
        const menu = document.getElementById("submenu");
        if (menu) {
          menu.style.display = "none";
        }
      }
    return (
        <>
            <div className="menu" id = "menu">
                <div className="container">
                    <nav className = "navbar">
                        <ul>
                            <div className = "nav-items-buttons">
                                <li className="nav-items">
                                    <Link href="/" className="nav-link navbrand"><img src="/images/new_logo.svg" width="180" height="auto" alt=""/></Link>
                                </li>
                                <li className="nav-items nav-items-text menu-dont">
                                    <img  src="/images/icon-gorod.webp" width="20" height="20" alt="" />
                                    <div className="text-items ">
                                        <p>Владивосток</p>
                                        <span>Звонить с 2:00-17:00 по МСК, писать в любое время</span>
                                    </div>
                                </li>
                            </div>
                            
                            <div className = "nav-items-buttons">
                                <li className="nav-items menu-dont"><a href="https://t.me/auto_ninja" className="nav-link"><img width="60" height="60" src="/images/tg.png" alt=""/></a></li>
                                <li className="nav-items menu-dont"><a href="https://www.youtube.com/@auto_ninja" className="nav-link"><img width="60" height="60" src="/images/yb.png" alt=""/></a></li>
                                <li className="nav-items menu-dont"><a href="https://wa.me/79242488665" className="nav-link"><img width="60" height="60" src="/images/what-ico.png" alt=""/></a></li>
                                <li className="nav-items menu-dont"><a href="tel:+7 (924) 248-86-65" className="nav-link nav-button">+7 (924) 248-86-65</a></li>
                                <li className="nav-items" onClick={openMenu}><a className="nav-link main-item header__button" ><img src="/images/menu-ico.png" alt=""/></a></li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
                
            <div className="menu-mobile">
                <div className="submenu" id = "submenu">
                    <div className="list-menu-mobile">
                        <div className="body-menu-mob">
                            <ul className="" style={{margin: 16}}>
                                <li className = "menu-close-list">
                                    <Link className = "nav-menu-items-mob" href="/">Главная</Link>
                                    <a className = "close-button" onClick={closeMenu}>&#10006;</a>
                                </li>
                                <li><Link className = "nav-menu-items-mob" href="/catalog">Каталог</Link></li>
                                <li><a className = "nav-menu-items-mob" href="https://auc.auto-ninja.ru/">Аукцион</a></li>
                                <li><Link className = "nav-menu-items-mob" href="/online-form">Онлайн-подбор</Link></li>
                                <li><Link className = "nav-menu-items-mob" href="/#stages">Этапы покупки</Link></li>
                                <li><Link className = "nav-menu-items-mob" href="/#dop-services">Дополнительный сервис</Link></li>
                                <li><a className = "nav-menu-items-mob" href="#contacts">Контакты</a></li>
                                <div className = "nav-items-buttons">
                                    <li className="nav-items"><a href="tel:+7 (924) 248-86-65" className="nav-link nav-button">+7 (924) 248-86-65</a></li>
                                    <li className="nav-items"><a href="https://wa.me/79242488665" className="nav-link"><img width="60" height="60" src="/images/what-ico.png" alt=""/></a></li>
                                </div>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
                
        </>
    );
}