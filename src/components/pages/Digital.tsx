import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageOne from '../../images/1-Print/1- Symposia/Symposia WEBSITE MOCKUPS.png'
import ImageTwo from '../../images/1-Print/2-Farmshelf/Farmshelf-mockups_9-26-21_bookmark.png'
import ImageThree from '../../images/1-Print/3-Museum of the City of New York/1-MCNY mockups_uptown-bounce.png'
import ImageFour from '../../images/1-Print/4-Leg Room/LegRoom_Mockup_10-24-22.png'
import ImageFive from '../../images/1-Print/5-Fletcher_s Fae/Fletcher_s-fae-logo-mockup.png'
import '../../styles/Project.css'


const Digital = ()=>{

    interface projectProps {
        image: string,
        link: string,
        alt: string
    }    

    const  [print, setPrint] = useState<projectProps[]>([{image:ImageOne, link:'symposia', alt:'test'}, {image:ImageTwo, link:'farmshelf', alt:'test'}, {image:ImageThree, link:'museumotcny', alt:'test'}, {image:ImageFour, link:'legroom', alt:'test'}, {image:ImageFive, link:'fletchersfae', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<Link to={`/${print.link}`}><img src={print.image} alt={print.alt} className='projectImage'/></Link>)
        })}
        </div>
    )
}

export default Digital