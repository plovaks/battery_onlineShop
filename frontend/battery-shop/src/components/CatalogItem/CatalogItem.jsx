import React from "react";
import './CatalogItem.css'
export default function CatalogItem({img, name, capcity, voltage, resistance, price}){
    return(
        <>
            <div className="item">
                <img src={img} alt="" className="item__img" />
                <p className="item__name">{name}</p>
                <p className="item__capacity">{capcity}</p>
                <p className="item__voltage">{voltage}</p>
                <p className="item__resistance">{resistance}</p>
                <p className="item__price">{price}</p>
            </div>
            <div className="item__mobile">
                <div className="item__mobile--main">
                    <img src={img} alt="item image" className="item__img" />
                    <p className="item__name">{name}</p>
                </div>
                <div className="item__mobile--characteristics">
                    <p className="item__capacity">Емкость: {capcity}мАч</p>
                    <p className="item__voltage">Напряжение: {voltage}В</p>
                    <p className="item__resistance"> Сопротивление {resistance}мОм</p>
                </div>
                <p className="item__price">{Math.round(price)}р.</p>
            </div>
        </>
        

    )
}