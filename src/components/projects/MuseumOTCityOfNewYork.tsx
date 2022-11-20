import { useState } from 'react'
import ImageOne from '../../images/1-Print/3-Museum of the City of New York/1-MCNY mockups_uptown-bounce.png'
import ImageTwo from  '../../images/1-Print/3-Museum of the City of New York/2-MCNY mockups_germ-city-book.png'
import ImageThree from  '../../images/1-Print/3-Museum of the City of New York/3-MCNY mockups_germ-city-poster.png'
import ImageFour from  '../../images/1-Print/3-Museum of the City of New York/4-MCNY mockups_activist-postcard.png'
import ImageFive from  '../../images/1-Print/3-Museum of the City of New York/5-MCNY mockups_berg-program.png'

const MuseumOTCityOfNewYork = ()=>{

    interface projectProps {
        image: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([{image:ImageOne, alt:'test'}, {image:ImageTwo, alt:'test'}, {image:ImageThree,  alt:'test'}, {image:ImageFour, alt:'test'}, {image:ImageFive, alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<img src={print.image} alt={print.alt} className='projectImage'/>)
        })}
        </div>
    )
}

export default MuseumOTCityOfNewYork