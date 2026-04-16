import {Link, useLocation} from "react-router-dom"
import {React, useState, useEffect} from "react"
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import './Catalog.css'
import Filter from "../../components/Filters/Filter";
const SERVER_URL = 'http://localhost:3000';
import AddToCart from "../../components/AddToCart/AddToCart";
export default function Catalog(){
    const [items, setItems] = useState([]);
    const location = useLocation();
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
        <div className="catalog" id='catalog'>
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
                        <Link to={`/product/${item.id}` }  key={item.id} state={{ background: location }}>
                            <CatalogItem 
                                img={item.images?.length > 0 ? `${SERVER_URL}${item.images[0].url}` : ''}
                                name={item.model + " " + item.name} 
                                capcity={item.specs[0].value}
                                voltage={item.specs[2].value}
                                resistance={item.specs[1].value}
                                price={item.price}
                            />
                        </Link>
                        ) 
                })}
            </div>
        </div>
    )
}