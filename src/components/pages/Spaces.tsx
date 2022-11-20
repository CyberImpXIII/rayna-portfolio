import { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageOne from '../../images/3-Spaces/Corduroy/ScreenShot1.png'
import ImageTwo from '../../images/3-Spaces/Corduroy/ScreenShot2.png'
import ImageThree from '../../images/3-Spaces/Corduroy/ScreenShot3.png'
import ImageFour from '../../images/3-Spaces/Corduroy/ScreenShot4.png'
import ImageFive from '../../images/3-Spaces/Corduroy/ScreenShot5.png'
import '../../styles/Project.css'


const Spaces = ()=>{

    interface projectProps {
        image: string,
        link: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([{image:ImageOne, link:'corduroy', alt:'test'}, {image:ImageTwo, link:'corduroy', alt:'test'}, {image:ImageThree, link:'corduroy', alt:'test'}, {image:ImageFour, link:'corduroy', alt:'test'}, {image:ImageFive, link:'corduroy', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<Link to={`/${print.link}`}><img src={print.image} alt={print.alt} className='projectImage'/></Link>)
        })}
        </div>
    )
}


export default Spaces