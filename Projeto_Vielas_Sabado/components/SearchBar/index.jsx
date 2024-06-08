import "./style.css"
import Lupa from "../../src/assets/lupa.png"

export const SearchBar = () => {
    return (
        <>
        <form>
            <div class="container">
                <img src={Lupa}/>
                <input type="text" placeholder="BUSCA"/>
            </div>
        </form>
        </>
    )
}