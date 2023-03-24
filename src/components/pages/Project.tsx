import projectImage from '../../interfaces/ProjectImage'
import Dropdown from '../DropDown'

interface projectProps {
    projectImages: projectImage[],
    content:string,
    title:string
}

const Project = ({projectImages, title, content}:projectProps)=>{


    return(
        <div>
        <Dropdown title={title} content={content} link={''}/>
        {projectImages.map((print)=>{
            return(<img src={print.image} alt={print.alt} className='projectImage'/>)
        })}
        </div>
    )
}

export default Project