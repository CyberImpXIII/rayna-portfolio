import '../styles/mobileMenu.css'

const MobileMenu = ({mobileNavActive, setMobileNavActive}:{mobileNavActive:boolean, setMobileNavActive:Function})=>(
<div onClick={()=>{setMobileNavActive(!mobileNavActive)}} className='mobileMenu'>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000">
    <g><g><g><path d="M977.6,321.8c6.8,0,12.4-5.8,12.4-12.4v-64.3c0-6.8-5.3-12.4-12.4-12.4H22.4c-6.8,0-12.4,5.8-12.4,12.4v64.3c0,6.8,5.3,12.4,12.4,12.4H977.6L977.6,321.8z"/><path d="M10,532.2c0,6.8,5.3,12.4,12.4,12.4h955.2c6.8,0,12.4-5.8,12.4-12.4v-64.3c0-6.9-5.3-12.4-12.4-12.4H22.4c-6.8,0-12.4,5.8-12.4,12.4V532.2z"/><path d="M10,754.9c0,6.8,5.3,12.4,12.4,12.4h955.2c6.8,0,12.4-5.8,12.4-12.4v-64.3c0-6.8-5.3-12.4-12.4-12.4H22.4c-6.8,0-12.4,5.8-12.4,12.4V754.9z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
</svg>
</div>
)

export default MobileMenu