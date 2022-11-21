import { useState } from 'react'
import '../../styles/Project.css'


const Digital = ()=>{

    interface projectProps {
        image: string,
        link: string,
        alt: string
    }    

    const  [print, setPrint] = useState<projectProps[]>([{image:process.env.PUBLIC_URL + '/videos/3-Spaces/A City for Corduroy/farmshelfwebsitemockup2.mp4', link:'', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/videos/3-Spaces/A City for Corduroy/WhatIsFarmshelf_IG_final.mp4', link:'', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(
            <video className='projectImage' width="100%" height="100%"  preload='auto' controls>
                <source src={print.image} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            )
        })}
        </div>
    )
}

export default Digital