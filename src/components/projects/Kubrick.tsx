import { useState } from 'react'

const Kubrick = ()=>{

    interface projectProps {
        image: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([{image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/1-MCNY mockups_uptown-bounce.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/2-MCNY mockups_germ-city-book.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/3-MCNY mockups_germ-city-poster.png',  alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/4-MCNY mockups_activist-postcard.png', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/1-Print/3-Museum of the City of New York/5-MCNY mockups_berg-program.png', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(<img src={print.image} alt={print.alt} className='projectImage'/>)
        })}
        </div>
    )
}

export default Kubrick