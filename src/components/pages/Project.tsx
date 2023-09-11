import projectImage from '../../interfaces/ProjectImage'
import Dropdown from '../DropDown'
import BackArrow from '../backArrow'

interface projectProps {
    projectImages: projectImage[],
    content:string,
    title:string,
    setDropDownActive:Function,
    dropDownActive:boolean,
    from:string
}

const Project = ({from, projectImages, title, content, setDropDownActive, dropDownActive}:projectProps)=>{

    return(
        <div>
        <Dropdown setDropDownActive={setDropDownActive} dropDownActive={dropDownActive} title={title} content={content} link={''}/>
        {projectImages.map((print, i)=>{
            return(<img key={`projectimage${i}`} src={print.image} alt={print.alt} className='projectImage'/>)
        })}
        <BackArrow from={from}/>
        </div>
    )
}

export default Project