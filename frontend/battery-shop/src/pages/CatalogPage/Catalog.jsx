import React, {useState, useEffect} from "react";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import './Catalog.css'
import Filter from "../../components/Filters/Filter";
import BatteryPage from "../BatteryPage/BatteryPage";
const SERVER_URL = 'http://localhost:3000';

export default function Catalog(){
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products');
                if (!response.ok){
                    throw new Error(`Ошибка: ${response.status}`)
                }
                const data = await response.json();
                setItems(data);

            } catch (error) {
                console.log(`error: ${error}`)
            }
        }
        fetchProducts();
    },[])

    const filters = [
        {
            id:1,
            name:"Емкость, мАч"
        },
         {
            id:2,
            name:"Напряжение, В"
        },
         {
            id:3,
            name:"Токоотдача"
        },
         {
            id:4,
            name:"Вес, г"
        },
         {
            id:5,
            name:"Диаметр, мм"
        }
    ]
    
    return(
        <div className="catalog">
            <h1 className="catalog__title">КАТАЛОГ ТОВАРОВ</h1>
            <div className="catalog__filters">
                {filters.map(filter => {
                    return(
                        <Filter
                            key={filter.id}
                            name={filter.name}
                        />
                    )
                })}
            </div>
            <div className="catalog__sections">
                <span className="catalog__sec--img">Фото</span>
                <span className="catalog__sec--name">Название</span>
                <span className="catalog__sec--capacity">Емкость, мАч</span>
                <span className="catalog__sec--volt">Напряжение, В</span>
                <span className="catalog__sec--resist">Сопротивление, мОм</span>
                <span className="catalog__sec--price">Цена</span>
                <span></span>
            </div>
            <div className="catalog__items">
                 {items.map(item => { 
                    return(
                        <CatalogItem 
                            key={item.id}
                            img={item.images?.length > 0 ? `${SERVER_URL}${item.images[0].url}` : ''}
                            name={item.model + " " + item.name} 
                            capcity={item.specs[0].value}
                            voltage={item.specs[2].value}
                            resistance={item.specs[1].value}
                            price={item.price}
                        />) 
                })}
            </div>
            <div className="battery__item">
                {items.slice(0,1).map(item => (
                    <BatteryPage

                        key={item.id}
                        mainImg={item.images?.length > 0 ? `${SERVER_URL}${item.images[0].url}` : ''}
                        images={item.images}
                        title="Аккумулятор Dmegc 50e 21700"
                        model="Dmegc 50e"
                        voltage="3В"
                        power="21"
                    />
                ))}
            </div>
        </div>
    )
}