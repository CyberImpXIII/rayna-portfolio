import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageOne from '../../images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS.png'
import ImageTwo from  '../../images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS2.png'
import ImageThree from  '../../images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS3.png'
import ImageFour from  '../../images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS4.png'
import ImageFive from  '../../images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS5.png'

const Illustration = ()=>{

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

export default Illustration