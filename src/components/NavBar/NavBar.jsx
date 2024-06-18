import style from './NavBar.module.css'

export default function NavBar(){
    return(
        <div className={style.container}>
            <div className={style.topRow}>
                <div className={style.logoContainer}>
                    <img className={style.logo} src="src/assets/mercado-libre-logo.png" />
                </div>
                <form className={style.searchBarContainer}>
                    <input type='text' className={style.searchBar} placeholder='Buscar productos, marcas y más...'></input>
                </form>
                <div>
                    <img className={style.starPlus} src="src/assets/starplus.png"/>
                </div>
            </div>
            <div className={style.bottomRow}>
                <div>Dirección</div>
                <div>Menú</div>
                <div>Cuenta</div>
            </div>
        </div>
    )
}