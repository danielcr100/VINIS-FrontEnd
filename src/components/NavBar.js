import React from "react";
import Face from "../assets/face.png";
import Insta from "../assets/insta.png";
import Logo from "../assets/logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <div className="container">
          <div className="row">
            <ul className="nav justify-content-start align-self-center ">
              <li className="nav-item ">
                <a className="nav-link active txtcol-petal" href="./index.html">
                  HOME
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active txtcol-petal"
                  href="./nuestraempresa.html"
                >
                  Nuestra empresa
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active txtcol-petal"
                  href="contacto.html"
                >
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a href="./socio.html">
                  <button type="button" class="btn btn-outline-success">
                    Socios de negocio
                  </button>
                </a>
              </li>
            </ul>
            <div className="col-sm align-self-center d-flex justify-content-around  ml-5">
              <a href="https://www.facebook.com">
                <img className="w-25" src={Face} />
              </a>
              <a href="https://www.instagram.com">
                <img className="w-25" src={Insta} />
              </a>
            </div>

            <div className="col-sm">
              <img
                className="w-75 animated infinite heartBeat"
                src={Logo}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
