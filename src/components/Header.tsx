import { Link } from "react-router-dom"

const Header = ()=>(
    <header className="App-header">
    <Link to='/'><div className='wideblock black title'>RW
      </div></Link>
    <div className='headerrainbow'></div>
  </header>
)
export default Header