import style from "./style.module.css"
import Bicicletas from "../../../assets/bicicletas.jpg"
import { Hastags } from "../../Hastags"

export const PurchasePage = () => {

    return (
        <>
        <section className={style.pchcont}>

            <img src={Bicicletas}></img>

            <section className={style.purchase}>
                <section className="desc">
                    <h2>Bicicletas</h2>
                    <p>Loja de bicicletas da área periférica do Rio de Janeiro</p>
                    <h3>Foto de <span>Ira Romão</span></h3>
                </section>
                <form>
                    <div>
                        <input type="radio" id="purchase" name="purchase"/>
                        <label htmlFor="purchase">Adicionar ao carrinho (compra individual)</label>
                    </div>
                    <div>
                        <input type="radio" id="package" name="package"/>
                        <label htmlFor="package">Adicionar a meu pacote (planos)</label>
                    </div>
                    <input type="submit" value="COMPRAR"/>
                </form>
            </section>

            <section className={style.description}>

                <img src={Bicicletas}/>

                <section>
                    <h2>Crise Financeira</h2>
                    <p>Como a alta dos preços impacta as famílias das periferias</p>
                </section>

            </section>

        </section>
        
        <Hastags links={["Cambuci","Crise","Alimentação","Saúde","Dinheiro","Cotidiano"]}/>
        
        </>
    )
}