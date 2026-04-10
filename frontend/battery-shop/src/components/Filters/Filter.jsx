import React from "react"
import './Filter.css'

export default function Filter({name}){
    return(
        <div className="filter__container">
            <p className="filter__name">{name}</p>
            <button className="btn filter__btn">Все</button>
        </div>
    )

}