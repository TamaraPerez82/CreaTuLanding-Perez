import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget"
import LogoV from './assets/LogoV.png'



const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
      <img className='LogoV' src={LogoV} alt="LogoV" /> 
      <h1 className="navbar-logo">Valery's</h1>   
      
                 
            <div className='btn-platos'>
        <button>Platos</button>
        <button>Bebidas</button>
        <button>Postres</button>
        </div>
      
     
      <CartWidget/>
      </nav>
      </div>
  )
}

export default Navbar