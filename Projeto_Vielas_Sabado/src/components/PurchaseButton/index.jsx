import style from "./style.module.css"

export const PurchaseButton = ({text,fontsize,margin}) => {
    return <input className={style.submiter} type="submit" value={text} style={{
        fontSize:fontsize,
        padding:10,
        margin:margin,
    }}></input>
}