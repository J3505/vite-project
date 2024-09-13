

const Header = () => {
  return (
    <>
    <header>
            <div className="padre">

                <div className="hijo1" >

                    <div className="hijo1-titulo">
                        <p>trvvrat</p>
                    </div>

                    <div className="hijo1-horaLugar">
                        <p>06:04:02</p>
                        <p>Login</p>
                    </div>
                </div>

                <div className="hijo2">

                    <div className="hijo2-Idioma">
                        <p className="a">En</p>
                        <p className="b">IN</p>
                    </div>

                    <div className="hijo2-Iconos">

                        <div className="iconos1">

                            <div className="circulo1">21</div>
                            {/* <img src="img/marcadorLibro.svg" width="15"  alt="aun"> */}

                        </div>

                        <div className="iconos2">

                            <div className="icono2">1</div>
                            {/* <img src="img/carrito.svg"  width="15" alt="aun"> */}

                        </div>

                    </div>

                    <div className="hijo2-User">
                        {/* <img src="img/triplebarra.svg" alt="aun"> */}
                        {/* <img className="fotoUser" src="img/User.png" alt="aun" > */}
                    </div>
                </div>
        </div>
    </header>
      
    </>
  )
}

export default Header
