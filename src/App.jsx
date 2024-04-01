import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = ()=>{
    return(
        <>
        <Navbar/>
        <ItemListContainer greeting={'Próximamente podrás hacer tu pedido'}/>
        <Banner/>
        </>
    )
}
export default App