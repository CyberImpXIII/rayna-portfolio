import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Project.css'

interface projectProps {
    image: string,
    link: string,
    alt: string
}    

interface pageProps{
    images:projectProps[],
    setActive: Function,
    pageName: string
}

const Page = (props: pageProps)=>{
    const ref = useRef<HTMLDivElement>(null)
   
    useEffect(()=>{
        let interval = setInterval(()=>{
            let active:(number | undefined) = undefined
                for(let i = 0; i <  Number(ref.current?.children.length); i++){
                    let rect = ref.current?.children[i].children[0].getBoundingClientRect()
                    if(rect && rect?.top < window.innerHeight && rect?.top + 150 < window.innerHeight){
                        active = i
                    } 
                }
                active && props.setActive(props.images[active].link)
        },100)
        return (()=>{clearInterval(interval)})
    },[])

    return(
        <div ref={ref} >
        {props.images.map((image, i)=>{
            return(<Link key={`${props.pageName}${i}${image.alt}`} to={`/${image.link}`}>
                {image.image.includes('.mp4') ?
                <video className='projectImage' width="100%" height="100%"  preload='auto' controls>
                    <source src={image.image} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>:
                <img src={image.image} alt={image.alt} className='projectImage'/>}
                </Link>)
        })}
        </div>
    )
}

export default Page