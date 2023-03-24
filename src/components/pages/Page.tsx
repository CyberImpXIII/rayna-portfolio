import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Project.css'
import DropDown from '../DropDown'

interface projectProps {
    image: string,
    link: string,
    alt: string,
    project?: string
}    

interface pageProps{
    images:projectProps[],
    setActive: Function,
    pageName: string,
    active: string,
    noDropDown?:boolean,
    title?:string,
    content?:string,
    link?:string
}

const Page = ({noDropDown, title, link, content, images, setActive, pageName, active}: pageProps)=>{
    const ref = useRef<HTMLDivElement>(null)
   
    useEffect(()=>{
        let interval = setInterval(()=>{
            let active:(number | undefined) = undefined  
                for(let i = 0; i <  Number(ref.current?.children.length); i++){
                    let rect = ref.current?.children[i].children[0].getBoundingClientRect()
                    console.log(i, rect && rect?.top < window.innerHeight, rect?.top, window.innerHeight )
                    if(rect && rect?.top < window.innerHeight && rect?.top + 150 < window.innerHeight){
                        active = i - 1
                        // -1 accounts for the nav dropdown now being inside this element
                    } 
                }
                if(typeof active=='number'){ 
                    setActive(images[active]?.project)
                }
        },100)
        return (()=>{clearInterval(interval)})
    },[active, setActive, images])

    return(
        <div ref={ref} key={`${pageName}ref`}>
        <DropDown noDropDown={noDropDown} title={title} content={content} link={link}/>
        {images.map((image, i)=>{
            return(<>
                {image.image.includes('.mp4') ?
                    <a><video data-project={image.project} key={`${pageName}${i}${image.alt}video`} className='projectImage' width="100%" height="100%"  preload='auto' controls>
                        <source src={image.image} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    </a>:
                    <Link key={`${pageName}${i}${image.alt}`} to={image.link !== '' ? `/${image.link}` : ''}>
                    <img data-project={image.project} key={`${pageName}${i}${image.alt}image`} src={image.image} alt={image.alt} className='projectImage'/>
                    </Link>}
                </>
                )
        })}
        </div>
    )
}

export default Page