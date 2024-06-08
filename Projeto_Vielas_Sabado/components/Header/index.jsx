import "./style.css"
import { SearchBar } from "../SearchBar"

export const Header = ({username,userimg}) => {
    return (
      <>
      <header>
          <nav>

            <ul>
              <div id="icon">

                <div></div>
                <div></div>
                <div></div>

              </div>
            </ul>
            
            <h1>vielas</h1>
            
            <section>

            {
            username?
            <p>olá, {username}</p>
            :
            <a href="">login</a>
            }

            <div id="image" style={{background : userimg ? userimg : "white"}}></div>
            </section>
          </nav>
      </header>
      </>
    )
  }