import React from "react";
import bin from "../../assets/icons/bin.svg"
import plusIcon from "../../assets/icons/plus.svg"
import minusIcon from "../../assets/icons/minus.svg"
import rubleBlue from "../../assets/icons/rubleBlue.svg"
import "./CartItem.css"
export default function CartItem(props){
    return(
        <div className="cartItem">
            <img src={props.img} alt="item image" className="cart__image"/>
            <div className="cartItem__info">
                 <h4 className="cartItem__title">{props.name}</h4>
                <p className="cartItem__desc">
                    <span className="cartItem__capacity">{props.capacity} мАч, </span>
                    <span className="cartItem__voltage">{props.voltage} В, </span>
                    <span className="cartItem__resistance">{props.resistance} мОм</span>
                </p>
            </div>
           
            <div className="cartItem__stepper">
                <button className="cartItem__btn--minus" id="minus">
                    <img src={minusIcon} alt="minus icon" />
                </button>
                <span className="stepper__value">{props.value}</span>
                <button className="cartItem__btn--plus" id="plus">
                    <img src={plusIcon} alt="plus icon" />
                </button>
            </div>
            <p className="cartItem__price">
                {props.price}
                <img src={rubleBlue} alt="" />
            </p>
            <img src={bin} alt="bin icon" />
        </div>
    )
}