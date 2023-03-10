import { Link } from "react-router-dom"
import Title from './Title'
import MobileMenu from "./MobileMenu"

interface HeaderProps {
  setUrl:Function,
  setMobileNavActive:Function, 
  mobileNavActive:boolean
}

const Header = ({setUrl, setMobileNavActive, mobileNavActive}:HeaderProps)=>(
    <header className="App-header">
    <Link to='/' onClick={()=>{setUrl('')}}>
      <Title extraClasses='wideblock black RW' titleClasses={'RW'} text='RW'/>
    </Link>
    <div className='headerrainbow'></div>
    <MobileMenu mobileNavActive={mobileNavActive} setMobileNavActive={setMobileNavActive}/>
  </header>
)
export default Header