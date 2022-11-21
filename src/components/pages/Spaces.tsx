import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Project.css'


const Spaces = ()=>{

    interface projectProps {
        image: string,
        link: string,
        alt: string
    }    
    
    const  [print, setPrint] = useState<projectProps[]>([
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot1.png', link:'corduroy', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot2.png', link:'corduroy', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot3.png', link:'corduroy', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot4.png', link:'corduroy', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Corduroy/ScreenShot5.png', link:'corduroy', alt:'test'},
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7773.jpg', link:'google', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7793.jpg', link:'google', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7799.jpg', link:'google', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7837-Edit.jpg', link:'google', alt:'test'},
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7855.jpg', link:'google', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7860.jpg', link:'google', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7884-Edit.jpg', link:'google', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7886.jpg', link:'google', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Google Austin/IMG_7887-Edit.jpg', link:'google', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/_DSC4716.jpg', link:'pernod', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/_DSC4726.jpg', link:'pernod', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/IMG_8243.jpg', link:'pernod', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Pernod Ricard/IMG_8250.jpg', link:'pernod', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7460.jpeg', link:'rebel', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7466.jpeg', link:'rebel', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Rebel Women_ Defying Victorianism/IMG_7469.jpeg', link:'rebel', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-027.jpg', link:'stettheimer', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-034.jpg', link:'stettheimer', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-048.jpg', link:'stettheimer', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-059.jpg', link:'stettheimer', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Stettheimer Dollhouse/BLF-2020-1119-MCNY-StettheimerDollhouse-135.jpg', link:'stettheimer', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Through a Different Lens_ Stanley Kubrick/Screen Shot 2019-03-11 at 5.25.53 PM.png', link:'kubrick', alt:'test'}, 
    {image:process.env.PUBLIC_URL + '/images/3-Spaces/Through a Different Lens_ Stanley Kubrick/Screen Shot 2019-03-11 at 5.26.33 PM.png', link:'kubrick', alt:'test'}])
    return(
        <div>
        {print.map((print)=>{
            return(
            <Link to={`/${print.link}`}>
                <img src={print.image} alt={print.alt} className='projectImage'/>
            </Link>)
        })}
        </div>
    )
}


export default Spaces