import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

class Pasos extends React.Component {
  render() {
    return (
      <div>
        <div id="bounce" className="container mt-5 mb-1">
          <div className="container">
            <div className="row">
              <div className="col-sm text-center">
                <h2 className="txtcol-poppy">Colaborar</h2>
                <img className="w-25" src={img1} alt="" />
              </div>
              <div className="col-sm text-center">
                <h2 className="txtcol-poppy">Plataforma</h2>
                <img className="w-25" src={img2} alt="" />
              </div>
              <div className="col-sm text-center">
                <h2 className="txtcol-poppy">Cliente</h2>
                <img className="w-25" src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="container">
            <div className="row">
              <div className="col-sm text-center">
                <p className="mt-4">
                  {" "}
                  Ser socio es parte de nuestro ser, ser parte de nuestra
                  compañia para obtener ganancias y trabajar en lo que tienes
                  pasion y talento{" "}
                </p>
              </div>
              <div className="col-sm text-center">
                <p className="mt-4">
                  {" "}
                  Con nuestra novedosa plataforma, podras acceder a un mundo de
                  salud y cuidado para tus uñas
                </p>
              </div>
              <div className="col-sm text-center">
                <p class="mt-4">
                  {" "}
                  Al ser cliente tendras una atencion personalizada para el
                  cuidado y salud de tus uñas{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pasos;
