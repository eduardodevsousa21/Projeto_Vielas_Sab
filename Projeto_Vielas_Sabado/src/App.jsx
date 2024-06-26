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
     <main>
        <PurchasePage/>
     </main>
     
     <Footer/>

    
     
    </>
  )
}

export default App