import React from "react";
import sales from "../../assets/icons/sales.svg"
import './BatteryPage.css'
import arrowBlue from "../../assets/icons/arrowBlue.svg"
export default function BatteryPage(props){

const SERVER_URL = 'http://localhost:3000';
    return(
        <div className="battery__container">
        <div className="battery__specs">
            <div className="battery__images">
                <img src={props.mainImg} alt="battery main image" className="battery__mainImg"/>
                <div className="battery__imgArr">
                    {props.images?.map((img, index) => (
                    <img 
                        key={index}
                        src={`${SERVER_URL}${img.url}`} 
                        alt="extra battery image" 
                        className="battery__optionalImg"/>
                ))}
                </div>
                
            </div>
            <div className="battery__info">
                <h3 className="battery__title">{props.title}</h3>
                <div className="battery__desc">
                    Характеристики:
                    <p className="battery__model">Модель: {props.model}</p>
                    <p className="battery__voltage">Напряжение: {props.voltage}</p>
                    <p className="battery__power">Токоотдача: {props.power}</p>
                </div>
                <button className="btn battery__sales">
                    Акции
                    <img src={arrowBlue} alt="ble arrow" />
                </button>
            </div>
        </div>

        <div className="battery__order"></div>
        <div className="battery__sales">
            <img src={sales} alt="sales icon" />
        </div>

        </div>

    )
}