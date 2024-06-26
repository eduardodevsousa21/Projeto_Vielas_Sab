import style from "./style.module.css"
import Bicicletas from "../../../assets/bicicletas.jpg"

export const PurchasePage = () => {

    return (
        <>
        <section className={style.pchcont}>
            <img src={Bicicletas}></img>
        </section>
        </>
    )
}