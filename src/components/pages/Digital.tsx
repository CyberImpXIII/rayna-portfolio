import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageOne from '../../images/3-Spaces/A City for Corduroy/ScreenShot1.png'
import ImageTwo from '../../images/3-Spaces/A City for Corduroy/ScreenShot1.png'
import '../../styles/Project.css'


const Digital = ()=>{

    interface projectProps {
        image: string,
        link: string,
        alt: string
    }    

    const  [print, setPrint] = useState<projectProps[]>([{image:ImageOne, link:'symposia', alt:'test'}, {image:ImageTwo, link:'farmshelf', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<Link to={`/${print.link}`}><img src={print.image} alt={print.alt} className='projectImage'/>
            <video width="100%" height="100%"  preload='auto'>
                <source src={print.image} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            </Link>)
        })}
        </div>
    )
}

export default Digital