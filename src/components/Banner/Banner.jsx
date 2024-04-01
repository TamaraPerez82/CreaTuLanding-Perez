import "./Banner.css"
const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-container">
            <h1>Elige tu menú</h1>            
            <div>
        <button>Platos</button>
        <button>Bebidas</button>
        <button>Postres</button>
        
      </div>
            </div>
    </div>
  )
}

export default Banner