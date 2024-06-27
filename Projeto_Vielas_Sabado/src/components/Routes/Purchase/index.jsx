import style from "./style.module.css"
import Bicicletas from "../../../assets/PurchasePageFotos/bicicletas.jpg"
import { FormSubmiter } from "../../FormSubmiter"

export const Purchase = (props) => {

    return(
        <main className={style.confirmpurch}>
            <h2>Carrinho de compras</h2>
            <p>Itens selecionados para compra: 1</p>

            <section className={style.product}>
                <form>
                    <img src={Bicicletas}></img>

                    <label>Tipo de mídia:</label>
                    <p>{props.media}</p>
                    <input readOnly={true} type="hidden" value={props.media}/>

                    <label>Resolução:</label>
                    <p>{props.resolution}</p>
                    <input readOnly={true} type="hidden" value={props.resolution}/>

                    <label className={style.type}>Tipo de licença:</label>
                    <p className={style.type}>{props.type} | Ver resumo das licenças</p>
                    <input readOnly={true} type="hidden" value={props.type}/>

                    <label>Como posso utilizar:</label>
                    <p>Disponível para todas as utilizações permitidas ao abrigo dos nossos <a>Termos de Licença</a></p>

                    <div className={style.select}> 
                        <input type="radio"/>
                        <label style={{marginLeft:5}}>Selecionar para compra</label>
                    </div>

                    <div className={style.other}>
                        <p style={{marginBlockEnd:20}}>Subtotal: R$ {props.sub}</p>
                        <FormSubmiter text={"prosseguir com a compra"} fontsize={"clamp(1rem,1.5vw,1.25rem)"}/>
                    </div>
                </form>
                
            </section>
            
        </main>
    )
}