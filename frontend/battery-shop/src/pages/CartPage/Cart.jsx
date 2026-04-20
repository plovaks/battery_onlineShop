import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import Order from "../../components/Order/Order";
import { useCart } from "../../components/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
    const { cart } = useCart(); 

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart__container">
            <h1 className="cart__title">КОРЗИНА</h1>
            <div className="cart__info">
                <div className="cart__items">
                    {cart.length > 0 ? (
                    <>
            
                        <div className="cart__headlines">
                            <span>Товар</span> 
                            <span>Количество</span> 
                            <span>Цена</span> 
                            <span></span> 
                           
                        </div>

                        {cart.map((item) => (
                            <CartItem
                                key={item.id}
                                product={item} 
                                img={item.images?.[0]?.url ? `https://serveronlineshop-production.up.railway.app${item.images[0].url}` : ""}
                                name={`${item.model} ${item.name}`}
                                capacity={item.specs?.[0]?.value}
                                voltage={item.specs?.[2]?.value}
                                resistance={item.specs?.[1]?.value}
                                value={item.quantity} 
                                price={item.price}
                            />
                        ))}
                    </>
                    ) : (
                        <div className="cart__empty-container">
                            <p className="cart__empty">Корзина пуста</p>
                            <Link to='/#catalog'>
                                <button className="cart__to-buy">К покупкам</button>
                            </Link>
                            
                        </div>
                    )}
                </div>


                <div className="cart__total">
                    <p className="cart__goods">Товары ({cart.length})</p>
                    <div className="cart__orders">
                        {cart.map((item) => (
                            <Order
                                key={item.id}
                                orderName={item.model}
                                orderPrice={item.price * item.quantity}
                            />
                        ))}
                    </div>
                    
                    <div className="cart__sum-box">
                        <p className="cart__sum">Итого: {totalPrice} ₽</p>
                    </div>
                    <button className="cart__pay" disabled={cart.length === 0}>
                        Оплатить
                    </button>
                </div>
            </div>
        </div>
    );
}
