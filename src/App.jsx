import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = ()=>{
    return(
        <>
        <Navbar/>
        <ItemListContainer greeting={'Proximamente podras ver nuestros productos'}/>
        <Banner/>
        </>
    )
}
export default App