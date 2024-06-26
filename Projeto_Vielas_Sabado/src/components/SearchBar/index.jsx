import style from "./style.module.css"
import Lupa from '../../assets/lupa.png'

export const SearchBar = () => {
    return (
        <>
        <form className={style.form}>
            <div className={style.container}>
                <img src={Lupa} className={style.img}/>
                <input type="text" placeholder="BUSCA" className={style.input}/>
            </div>
        </form>
        </>
    )
}