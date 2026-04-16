import React, {useState} from "react";
import ruble from "../../assets/icons/ruble.svg"
import './AddToCart.css'
export default function AddToCart({price, salePrice}){
    const [isAdded, setIsAdded] = useState(false);
    const [count, setCount] = useState(1);
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if(value > 0) setCount(value);
        else if (e.target.value === "") setCount("");
    }
    
    if(!isAdded){
        return(
            <div className="purchase__container">
                <p className="purchase__price">
                    {price}
                    <img src={ruble} alt="icon ruble" />
                </p>
                <p className="purchase__sales">{salePrice}р/шт при покупке от 100шт</p>
                <button className="btn purchase__addToCart" onClick={() => setIsAdded(true)}>
                    Добавить в корзину
                </button>
            </div>
        )
    }

    return(
        <div className="purchase__container">
                <p className="purchase__price">
                    {price}
                    <img src={ruble} alt="icon ruble" />
                </p>
                <p className="purchase__sales">{salePrice}р/шт при покупке от 100шт</p>
                <div className="counter__wrapper">
                    <button className="btn purchase__inCart">
                        В корзине
                    </button>
                    <div className="purchase__counter">
                        <button className="counter__btn" onClick={() => setCount(prev => Math.max(1, Number(prev) - 1))}>-</button>
                        <input
                            type="number"
                            value={count}
                            onChange={handleInputChange}
                            onBlur={()=> { if(!count) setCount(1) }}
                        />
                        <button className="counter__btn" onClick={() => setCount(Number(count)+1)}>+</button>
                    </div>
                </div>
                
        </div>
    )
}