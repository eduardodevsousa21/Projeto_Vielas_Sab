import style from "./style.module.css"
import Bicicletas from "../../../assets/PurchasePageFotos/bicicletas.jpg"
import { Product } from "../../Product"

export const PurchaseCart = () => {

    return(
        <main className={style.confirmpurch}>
            <h2>Carrinho de compras</h2>
            <p>Itens selecionados para compra: 1</p>

            <section className={style.products}>
                <form>
                    <Product
                        type = "Royalty-free"
                        resolution = "Resolução 4000 x 6000 - 300 dpi - RGB"
                        media = "Imagem do Creative"
                        sub = "10,00"
                        img = {Bicicletas}
                        last = {false}
                    />
                    <Product
                        type = "Royalty-free"
                        resolution = "Resolução 4000 x 6000 - 300 dpi - RGB"
                        media = "Imagem do Creative"
                        sub = "10,00"
                        img = {Bicicletas}
                        last = {true}
                    />
                </form>
                
            </section>
            
        </main>
    )
}