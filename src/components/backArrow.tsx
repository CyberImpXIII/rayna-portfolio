import { useEffect, useState } from 'react'
import '../styles/backArrow.css'

const BackArrow = ({from}:{from:string}) => {
    const fromHandler = (future:string)=>{
        console.log(future, future==='/')
        if(future==='/'){
            return 'Home'
        }else{
            let string = future.split('')
            string.shift()
            string[0] = string[0].toUpperCase();
            return '#/' + string.join('')
            
        }
    }

    let [fromString, setFromString] = useState(fromHandler(from))
    useEffect(()=>{
        setFromString(fromHandler(from));
    },[from])
    return(
    <a href={from ==='/' ? '#' : `/#${from}`} className='backArrow'>
        <div>
            <svg className='backArrowSVG' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 330 330" xmlSpace="preserve">
            <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>
            {`Back to ${fromString}`}
        </div>
    </a>
    )
}

export default BackArrow