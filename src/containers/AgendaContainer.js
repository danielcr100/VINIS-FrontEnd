import React from "react";
import FormularioCliente from "../components/FormularioCliente";
import FormularioServicio from "../components/FormularioServicio";

class AgendaContainer extends React.Component {
  state = {
    form: {
      Nombre: "",
      Apellido: "",
      Telefono: "",
      Direccion: "",
      Pais: "",
      Provincia: "",
      CodigoPostal: "",
      MetodoPago: "",
      NombreTarjeta: "",
      NumeroTarjeta: "",
      Expiracion: ""
    }
  };
  render() {
    return <FormularioCliente />;
  }
}

export default AgendaContainer;
