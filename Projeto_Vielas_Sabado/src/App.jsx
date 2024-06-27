//import { Header } from "../../components/Header"
import {Footer} from './components/Footer'
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { PurchasePage } from './components/Routes/PurchasePage'
import { Purchase } from './components/Routes/Purchase'

function App(){

  return (
    <>

     <Header/>

     <SearchBar/>
      
      <Purchase
        type = "Royalty-free"
        resolution = "Resolução 4000 x 6000 - 300 dpi - RGB"
        media = "Imagem do Creative"
      />
     
     <Footer/>

    
     
    </>
  )
}

export default App
