import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Project.css'


const Illustration = ()=>{

    interface projectProps {
        image: string,
        link: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/2020_Blog_BeginnersGuide2.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/2020_Blog_FoodWaste.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/ezgif-6-5fc630b070ad.gif', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0211.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0212.png', link:'', alt:'test'},
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0214.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0215.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0216+2.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0217+2.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0222.png', link:'', alt:'test'},
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0223+2.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_0224+2.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/IMG_7465.jpeg', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/KaleOnCouch_2-01.jpeg', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/PARTY-INVITE.gif', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/Screen+Shot+2019-04-02+at+5.57.04+PM.png', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/4-Illustration/Screen+Shot+2019-04-02+at+6.10.45+PM.png', link:'', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<Link to={`/${print.link}`}><img src={print.image} alt={print.alt} className='projectImage'/></Link>)
        })}
        </div>
    )
}

export default Illustration