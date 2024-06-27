import style from "./style.module.css"
import { useState, useEffect } from "react"

const Tag = ({text}) => {
    return <a>#{text}</a>
}

export const Hastags = (props) => {

    const myreturn = []
    
    const links = props.links ? props.links : null

    if (links) {

        for (var i=0;i<links.length;i++) {
            let a = <Tag text={links[i]}/>
            
            myreturn.push(a)
        }

    }

    return <><section className={style.hastags}>{myreturn}</section></>
}