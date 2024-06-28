//import { Header } from "../../components/Header"
import "./App.css"
import {Footer} from './components/Footer'
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { PurchasePage } from './components/Routes/PurchasePage'
import { PurchaseCart } from "./components/Routes/PurchaseCart"

function App(){

  return (
    <>

     <Header/>

     <SearchBar/>
      
      <PurchasePage/>
     
     <Footer/>

    
     
    </>
  )
}

export default App
