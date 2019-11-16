import React from "react";

import Hero from "../components/Hero";
import Pasos from "../components/Pasos";
import Video from "../components/Video";
import Experiencias from "../components/Experiencias";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Hero />
        </div>
        <div>
          <Pasos />
        </div>
        {/* <div>
          <Video />
        </div> */}
        <div>
          <Experiencias />
        </div>
      </div>
    );
  }
}

export default MainPage;
