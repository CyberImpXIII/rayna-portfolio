interface titleprops {
    text:string,
    extraClasses?:string,
    titleClasses?:string
}

const Title = ({text, extraClasses, titleClasses}:titleprops)=>{
    return(
        <div className={`textShrink ${extraClasses && extraClasses}`}>
            <div className={`title ${titleClasses}`}>{text}</div>
        </div>
        )}

export default Title