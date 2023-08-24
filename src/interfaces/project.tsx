import projectImage from './ProjectImage'

export default interface Project{
    projectName:string,
    projectLink:string,
    dropdownContent:string,
    projectImages:projectImage[]
}