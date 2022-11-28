import { Link } from "react-router-dom"

interface HeaderProps {
  setUrl:Function
}

const Header = (props:HeaderProps)=>(
    <header className="App-header">
    <Link to='/' onClick={()=>{props.setUrl('')}}><div className='wideblock black title'>RW
      </div></Link>
    <div className='headerrainbow'></div>
  </header>
)
export default Header