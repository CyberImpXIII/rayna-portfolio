import { useState } from 'react'

const FletchersFae = ()=>{

    interface projectProps {
        image: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([{image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_bookmark.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_collateral-booklet.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_nutrient-instruction-postcard.png',  alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_sales-postcard.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_sales-postcard.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_welcome-postcard.png', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<img src={print.image} alt={print.alt} className='projectImage'/>)
        })}
        </div>
    )
}

export default FletchersFae