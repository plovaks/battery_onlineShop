import React from "react";
import logo from "../assets/images/logo.svg"
import profile from "../assets/icons/profile.svg"
import cart from "../assets/icons/cart.svg"
import search from "../assets/icons/search.svg"
import DropdownMenu from "./DropdownMenu/DropdownMenu";

export default function Header(){
    return(
        <header>
                    <div className="header__logo">
                        <img className="header__logo--img" src={logo} alt="logo" />
                        <div className="header__logo--text">
                            <p className="header__logo--name">Power</p>
                            <p className="header__logo--name">Store</p>
                        </div>
                    </div>
                    <div className="header__container">
                        <input type="text" placeholder="18700"/>
                       <img src={search} alt="search icon" className="icon header__search--icon"/>
                    </div>
                    
                    <nav className="header__menu">
                        <ul>
                            <li className=""><a href="#">Главная</a></li>
                            <li className="">
                                <DropdownMenu>
                                    <a href="#">О нас</a>
                                    <a href="#">Каталог</a>
                                    <a href="#">Корзина</a>
                                </DropdownMenu>
                            </li>
                        </ul>
                        <div className="nav__user-actions">
                            <button>
                                <img className="icon header__icon--profile" src={profile} alt="profile icon" />
                            </button>
                            <button>
                                <img className="icon header__icon--cart" src={cart} alt="cart icon" />
                            </button>
                    </div>
                    </nav>
                    
                </header>
    )
}