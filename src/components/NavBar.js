import React from "react";
import "./styles/NavBar.css";

class NavBar extends React.Component {
    render (){
        return(
            <div className="NavBar">
                    <div className="container">
                        <div className="row">

                        <ul className="nav justify-content-start align-self-center ">
                            <li className="nav-item ">
                            <a className="nav-link active txtcol-petal" href="./index.html">HOME</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link active txtcol-petal" href="./nuestraempresa.html">Nuestra empresa</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link active txtcol-petal" href="contacto.html">Contacto</a>
                        </li>
                            <li className="nav-item">
                            <a href="./socio.html"><button type="button" class="btn btn-outline-success">Socios de negocio</button></a> 
                            </li>


                        </ul>
                        <div className="col-sm align-self-center d-flex justify-content-around  ml-5">
                            <a href="https://www.facebook.com">
                            <img className="w-25" src="./IMG/face.png"></a>
                            <a href="https://www.instagram.com">
                            <img className="w-25" src="./IMG/insta.png"></a>
                        </div>

                        <div className="col-sm">
                            <img className="w-75 animated infinite heartBeat" src="./IMG/LogoMakr_945x5U.png" alt="">
                        </div>

                        </div>

                    </div>

            </div>

        )
    }
}