import React from "react"
import AboutUsBlock from "../../components/AboutUsBlocks/AboutUsBlock"
import block1 from "../../assets/images/about-block1.png"
import block2 from "../../assets/images/about-block2.png"
import './AboutPage.css'

export default function AboutPage(){
    const blocksData = [
        {
            id:1,
            img:block1,
            innerText:"Оригинальная продукция",
            description:"Только оригинальные аккумуляторы с гарантией. Все проверено."
        },
        {
            id:2,
            img:block2,
            innerText:"Опт и розница",
            description:"Специальные условия для оптовиков и приятные цены для розничных покупателей."
        },
        {
            id:3,
            img:block1,
            innerText:"Без посредников",
            description:"Мы сами привозим товар - никаких посредников и скрытых наценок."
        },
    ]

    return(
       
        <main id="about" className="about__page">
             <h1 className="about__title">НАШИ ПРЕИМУЩЕСТВА</h1>
             <div className="about__blocks">
                {blocksData.map(block => (
                    <AboutUsBlock
                        key={block.id}
                        img={block.img}
                        innerText={block.innerText}
                        description={block.description}
                    />
                ))
                    
                }
             </div>
        </main>
    )
}