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
                <div className={style.direccion}>
                    <p className={style.enviarA}>Enviar a</p>
                    <p className={style.ciudad}>Capital Federal</p>
                </div>
                <div className={style.menuContainer}>
                    <p className={style.menuItem}>Categorías</p>
                    <p className={style.menuItem}>Ofertas</p>
                    <p className={style.menuItem}>Historial</p>
                    <p className={style.menuItem}>Supermercado</p>
                    <p className={style.menuItem}>Moda</p>
                    <p className={style.menuItem}>Mercado Play</p>
                    <p className={style.menuItem}>Vender</p>
                    <p className={style.menuItem}>Ayuda</p>
                </div>
                <div className={style.cuentaContainer}>
                    <p>Creá tu cuenta</p>
                    <p>Ingresá</p>
                    <p>Mis compras</p>
                    <img className={style.carritoImagen} src="src/assets/shopping-cart.png"/>
                </div>
            </div>
        </div>
    )
}