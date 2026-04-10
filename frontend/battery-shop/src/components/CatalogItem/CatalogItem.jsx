import React from "react";
import cart from "../../assets/icons/cart.svg"
import './CatalogItem.css'
export default function CatalogItem({img, name, capcity, voltage, resistance, price}){
    return(
        <div className="item">
            <img src={img} alt="" className="item__img" />
            <div className="item__characteristics">
                <p className="item__name">{name}</p>
                <p className="item__capacity">{capcity}</p>
                <p className="item__voltage">{voltage}</p>
                <p className="item__resistance">{resistance}</p>
            </div>
            
            <p className="item__price">{price}</p>
            <img src={cart} alt="cart icon" />
        </div>
    )
}