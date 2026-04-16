import React from "react";
import logo from "../assets/images/logo.svg"
import profile from "../assets/icons/profile.svg"
import cart from "../assets/icons/cart.svg"
import search from "../assets/icons/search.svg"
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header(){
    return(
        <header>
                    <Link to='/' className="header__logo">
                        <img className="header__logo--img" src={logo} alt="logo" />
                        <div className="header__logo--text">
                            <p className="header__logo--name">Power</p>
                            <p className="header__logo--name">Store</p>
                        </div>
                    </Link>
                    <div className="header__container">
                        <input type="text" placeholder="18700"/>
                       <img src={search} alt="search icon" className="icon header__search--icon"/>
                    </div>
                    
                    <nav className="header__menu">
                        <ul>
                             <li><HashLink smooth to="/#home">Главная</HashLink></li>
                            <li className="">
                                <DropdownMenu>
                                    <HashLink smooth to="/#about">О нас</HashLink>
                                    <HashLink smooth to="/#catalog">Каталог</HashLink>
                                    <Link to='/cart'>Корзина</Link>
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