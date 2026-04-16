import React from "react";
import { HashLink } from "react-router-hash-link";
import arrow from "../../assets/icons/arrowRight.svg"
import centralImg from "../../assets/images/main-page-central.svg"
import leftRed from "../../assets/images/main-page-leftRed.png"
import leftYellow from "../../assets/images/main-page-leftYellow.png"
import rightRed from "../../assets/images/main-page-rightRed.png"
import rightYellow from "../../assets/images/main-page-rightYellow.png"
import Header from "../../components/Header";
import './HomePage.css'

export default function HomePage(){
    return(
        <main className="homePage" id='home'>
        <Header/>
        <div className="main-page">
            <h1 className="main-page__title">POWER STORE</h1>
            <div className="main-page__text">
                <h4 className="main-page__text--advantage">
                    Высококачественные 
                </h4 >
                <h4 className="main-page__text--advantage">аккумуляторы</h4>
            </div>
            <div className="main-page__info">
                <p className="main-page__desc">Магазин аккумуляторных батарей и портативных электростанций</p>
                <div className="main-page__btnSection">
                    <HashLink smooth to="/#catalog">
                        <button className="btn main-page__btn--buy">
                            К покупкам
                            <img src={arrow} alt=" right arrow" />
                        </button>
                    </HashLink>
                    
                    <p className="main-page__sales">скидки при покупке от 3 штук</p>
                </div>
            </div>
            
            <div className="main-page__images">
                <img className="main-page__image--centered" src={centralImg} alt="central batteries" />
                <img className="main-page__image__leftRed" src={leftRed} alt="left red battery" />
                <img className="main-page__image__leftYellow" src={leftYellow} alt="left yellow battery" />
                <img className="main-page__image__rightRed" src={rightRed} alt="right red battery" />
                <img className="main-page__image__rightYellow" src={rightYellow} alt="right yellow battery" />
            </div>
                
            
        </div>
        </main>
    )
}