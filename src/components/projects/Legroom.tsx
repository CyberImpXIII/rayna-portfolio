import { useState } from 'react'
import ImageOne from '../../images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_bookmark.png'
import ImageTwo from  '../../images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_collateral-booklet.png'
import ImageThree from  '../../images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_nutrient-instruction-postcard.png'
import ImageFour from  '../../images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_sales-postcard.png'
import ImageFive from  '../../images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_sales-postcard.png'
import ImageSix from  '../../images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_welcome-postcard.png'

const Legroom = ()=>{

    interface projectProps {
        image: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([{image:ImageOne, alt:'test'}, {image:ImageTwo, alt:'test'}, {image:ImageThree,  alt:'test'}, {image:ImageFour, alt:'test'}, {image:ImageFive, alt:'test'}, {image:ImageSix, alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<img src={print.image} alt={print.alt} className='projectImage'/>)
        })}
        </div>
    )
}

export default Legroom