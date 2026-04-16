import React from "react";
import './CatalogItem.css'
export default function CatalogItem({img, name, capcity, voltage, resistance, price}){
    return(
        <div className="item">
            <img src={img} alt="" className="item__img" />
            <p className="item__name">{name}</p>
            <p className="item__capacity">{capcity}</p>
            <p className="item__voltage">{voltage}</p>
            <p className="item__resistance">{resistance}</p>
            <p className="item__price">{price}</p>
        </div>
    )
}