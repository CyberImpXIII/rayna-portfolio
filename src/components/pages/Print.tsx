import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Project.css'

interface projectProps {
    image: string,
    link: string,
    alt: string
}    

const Print = ()=>{

    const  [print, setPrint] = useState<projectProps[]>([{image:process.env.PUBLIC_URL + '/images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS.png', link:'symposia', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_bookmark.png', link:'farmshelf', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/1-MCNY mockups_uptown-bounce.png', link:'museumotcny', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/4-Leg Room/LegRoom_Mockup_10-24-22.png', link:'legroom', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/5-Fletcher_s Fae/Fletcher_s-fae-logo-mockup.png', link:'fletchersfae', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<Link to={`/${print.link}`}><img src={print.image} alt={print.alt} className='projectImage'/></Link>)
        })}
        </div>
    )
}

export default Print