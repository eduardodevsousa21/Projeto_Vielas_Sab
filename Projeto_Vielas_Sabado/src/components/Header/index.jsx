import style from "./style.module.css"
import { SearchBar } from "../SearchBar"

export const Header = ({username,userimg}) => {
    return (
      <>
      <header>
          <nav className={style.nav}>

            <ul className={style.ul}>
              <div id="icon">

                <div></div>
                <div></div>
                <div></div>

              </div>
            </ul>
            
            <h1 className={style.h1}>vielas</h1>
            
            <section className={style.section}>

            {
            username?
            <p className={style.p}>olá, {username}</p>
            :
            <a href="">login</a>
            }

            <div id={style.image} style={{background : userimg ? userimg : "white"}}></div>
            </section>
          </nav>
      </header>
      </>
    )
  }
