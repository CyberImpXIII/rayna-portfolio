import { useState } from 'react'
import { Link } from 'react-router-dom'

const Illustration = ()=>{

    interface projectProps {
        image: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([{image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS2.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS3.png',  alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS4.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS5.png', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<img src={print.image} alt={print.alt} className='projectImage'/>)
        })}
        </div>
    )
}

export default Illustration