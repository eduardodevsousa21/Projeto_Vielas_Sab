//import { Header } from "../../components/Header"
import {Footer} from './components/Footer'
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { PurchasePage } from './components/Routes/PurchasePage'

function App(){

  return (
    <>

     <Header/>

     <SearchBar/>
      
      <PurchasePage 
        name="Casarão do Cambuci"
        desc="Vista da casa de Dona Magnólia do Cambuci"
        author="Ira Romão"
      />
     
     <Footer/>

    
     
    </>
  )
}

export default App