import style from "./style.module.css"
import { useState, useEffect } from "react"


export const Hastags = (props) => {

    const myreturn = []
    
    const links = props.links ? props.links : null

    if (links) {

        for (var i=0;i<links.length;i++) {
        
            myreturn.push(<li key={i}><a>#{links[i]}</a></li>)
        }

    }

    return <ul className={style.hastags}>{myreturn}</ul>
}