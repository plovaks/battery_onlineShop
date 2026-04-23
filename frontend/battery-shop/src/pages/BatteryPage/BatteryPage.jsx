import React, { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom"; 
import './BatteryPage.css'
import arrowBlue from "../../assets/icons/arrowBlue.svg"
import AddToCart from "../../components/AddToCart/AddToCart";
import ProfitableOffers from "../../components/ProfitableOffers/ProfitableOffers";

export default function BatteryPage({ isModal }) {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [activeImg, setActiveImg] = useState("");
    const SERVER_URL = 'https://serveronlineshop-production.up.railway.app';
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${SERVER_URL}/api/products/${id}`);
                if (!response.ok) throw new Error("Товар не найден");
                const data = await response.json();
                setProduct(data);
                if (data.images?.length > 0) {
                    setActiveImg(`${SERVER_URL}${data.images[0].url}`);
                }
            } catch (error) {
                console.error("Ошибка загрузки товара:", error);
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
    
    if (isModal) {
        document.body.style.overflow = "hidden";
    }

   
    return () => {
        document.body.style.overflow = "auto";
    };
    }, [isModal]); 

    const handleClose = (e) => {
        if (e.target.classList.contains('battery__modal-overlay') || e.target.classList.contains('close-btn')) {
            navigate(-1); 
        }
    };

    if (!product) {
        return <div className="loading">Загрузка данных...</div>;
    }

    
    const content = (
        <div className="battery__container">
           
            {isModal && <button className="close-btn" onClick={() => navigate(-1)}>×</button>}
            
            <div className="battery__buy">
                <div className="battery__specs">
                    <div className="battery__images">
                        <img 
                            src={activeImg} 
                            alt="battery main" 
                            className="battery__mainImg"
                        />
                        <div className="battery__imgArr">
                            {product.images?.map((img, index) => (
                                <img 
                                    key={index}
                                    src={`${SERVER_URL}${img.url}`} 
                                    alt="extra" 
                                    className={`battery__optionalImg ${activeImg === `${SERVER_URL}${img.url}` ? 'active-thumb' : ''}`}
                                    onClick={() => setActiveImg(`${SERVER_URL}${img.url}`)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="battery__info">
                        <h3 className="battery__title"> {product.name} {product.model}</h3>
                        <div className="battery__desc">
                            Характеристики:
                            {product.specs.map((spec, index) =>(
                                <p key={index} className="battery__spec"><span>{spec.name} :</span> {spec.value} {spec.unit}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="battery__order">
                    <AddToCart
                        product={product} 
                        price={Math.trunc(product.price)}
                        salePrice={Math.trunc(product.price) - 10} 
                    />
                </div>
            </div>

            <div className="battery__sales">
                <div className="battery__offer">Выгодные предложения:</div>
                <div>
                    <ProfitableOffers numOfGoods="100" pricePerGood={Math.trunc(product.price)-10} />
                    <ProfitableOffers numOfGoods="500" pricePerGood={Math.trunc(product.price)-15} />
                    <ProfitableOffers numOfGoods="1000" pricePerGood={Math.trunc(product.price)-25} />
                </div>
            </div>
        </div>
    );
    return isModal ? (
        <div className="battery__modal-overlay" onClick={handleClose}>
            <div className="battery__modal-content">
                {content}
            </div>
        </div>
    ) : content;
}
