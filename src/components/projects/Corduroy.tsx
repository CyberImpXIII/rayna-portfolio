import { useState } from 'react'

const Corduroy = ()=>{

    interface projectProps {
        image: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot1.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot2.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot3.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot4.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot5.png', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<img src={print.image} alt={print.alt} className='projectImage'/>)
        })}
        </div>
    )
}

export default Corduroy