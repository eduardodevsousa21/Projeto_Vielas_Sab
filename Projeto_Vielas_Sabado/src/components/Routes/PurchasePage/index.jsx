import style from "./style.module.css"
import Bicicletas from "../../../assets/PurchasePageFotos/bicicletas.jpg"
import CriancasJogandoBola from "../../../assets/PurchasePageFotos/criancas_bola.jpg"
import CriancasJogandoPc from "../../../assets/PurchasePageFotos/criancas_pc.jpg"
import Escola from "../../../assets/PurchasePageFotos/escola.jpg"
import Loja from "../../../assets/PurchasePageFotos/loja.jpg"
import Plantacao from "../../../assets/PurchasePageFotos/plantacao.jpg"
import Predios from "../../../assets/PurchasePageFotos/predios.jpg"
import Supermercado from "../../../assets/PurchasePageFotos/supermercado.jpg"
import Trabalhadores from "../../../assets/PurchasePageFotos/trabalhadores.jpg"
import Vacina from "../../../assets/PurchasePageFotos/vacina.jpg"
import { Hastags } from "../../Hastags"
import { PurchaseButton } from "../../PurchaseButton"

export const PurchasePage = (props) => {

    return (
        <main className={style.purch}>
            <section className={style.pchcont}>

                <img src={Bicicletas}></img>

                <section className={style.purchase}>
                    <section className="desc">
                        <h2>{props.name ? props.name : null}</h2>
                        <p>{props.desc ? props.desc : null}</p>
                        <h3>Foto de <span>{props.author ? props.author : null}</span></h3>
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
                        <PurchaseButton
                            text={"COMPRAR"} 
                            fontsize={"clamp(1rem,2.5vw,1.875rem)"} 
                            margin={"auto auto 0 0"}
                        />
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

            <section className={style.fotos}>
                <h2>Fotos semelhantes</h2>
                <div className="container">
                    <img src={Escola} alt="" />
                    <img src={CriancasJogandoBola} alt="" />
                    <img src={Loja} alt="" />
                    <img src={Plantacao} alt="" />
                    <img src={Predios} alt="" />
                    <img src={Supermercado} alt="" />
                    <img src={CriancasJogandoPc} alt="" />
                    <img src={Trabalhadores} alt="" />
                    <img src={Vacina} alt="" />
                </div>
            </section>
        
        </main>
    )
}