import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <div className="Hero">
        <div className="container bgcol-petal">
          <div className="box">
            <img
              src="https://www.academiaandrea.com/wp-content/uploads/2018/11/U%C3%B1as_01.png"
              alt="uñas"
            />
            <a href="./agenda.html">
              {" "}
              <button className="btn btn-light action align-self-center">
                {" "}
                Agenda tu cita de servicio
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
