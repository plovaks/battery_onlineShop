import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css"
import Order from "../../components/Order/Order";
export default function Cart(){

    return(
        <div className="cart__container">
            <h1 className="cart__title">КОРЗИНА</h1>
            <div className="cart__info">
                <div className="cart__items">
                <div className="cart__headlines">
                    <span>Товар</span>
                    <span>Количество</span>
                    <span>Цена</span>
                </div>
                <CartItem
                    img=""
                    name="Dmegc 50e 21700 аккумулятор"
                    capacity="4950"
                    voltage="3.5"
                    resistance="12.7"
                    value="4"
                    price="135"
                />
                 <CartItem
                    img=""
                    name="Dmegc 50e 21700 аккумулятор"
                    capacity="4950"
                    voltage="3.5"
                    resistance="12.7"
                    value="4"
                    price="135"
                />
                 <CartItem
                    img=""
                    name="Dmegc 50e 21700 аккумулятор"
                    capacity="4950"
                    voltage="3.5"
                    resistance="12.7"
                    value="4"
                    price="135"
                />
            </div>
            <div className="cart__total">
                <p className="cart__goods">Товары</p>
                <div className="cart__orders">
                    <Order
                        orderName="Dmegc 50e 21700"
                        orderPrice="1200"
                    />
                     <Order
                        orderName="Dmegc 50e 21700"
                        orderPrice="1200"
                    />
                     <Order
                        orderName="Dmegc 50e 21700"
                        orderPrice="1200"
                    />
                </div>
                    
                <p className="cart__sum">Итого</p>
                <button className="cart__pay">Оплатить</button>
            </div>
            </div>
            
            
        </div>
    )
}