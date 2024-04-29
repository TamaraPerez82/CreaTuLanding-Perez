import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'
import LogoV from './assets/LogoV.png'


const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        
      <img className='LogoV' src={LogoV} alt="LogoV" /> 
      <Link to='/'>
      <h1 className="navbar-logo">Valery's</h1>   
      </Link>
                 
            <div className='Categories'>
              <NavLink to={'/category/platos'} className={({isActive})=> isActive ? 'ActiveOption': 'Option'}>Platos</NavLink>
              <NavLink to={'/category/bebidas'} className={({isActive})=> isActive ? 'ActiveOption': 'Option'}>Bebidas</NavLink>
              <NavLink to={'/category/postres'} className={({isActive})=> isActive ? 'ActiveOption': 'Option'}>Postres</NavLink>       
        </div>      
     
      <CartWidget/>
      </nav>
      </div>
  )
}

export default Navbar