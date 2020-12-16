import React, { Component } from "react";
import { Row } from "reactstrap";
import "whatwg-fetch";

class App extends Component {
  state = {
    collapse: false,
  };

  toggle = () => {
    this.setState({ collapse: !!this.state.collapse });
  };

  render() {
    return [
      <div className="grails-logo-container" key={1}>
        <img
          className="grails-logo"
          src="https://source.unsplash.com/1600x900/?digital"
          alt="Grails"
        />
      </div>,

      <Row key={2}>
        <div id="content">
          <section className="row colset-2-its">
            <h1 style={{ textAlign: "center" }}>
              Welcome to Hardware and Embedded Consultancy
            </h1>
            <br />
            <p>
              Hardware and embedded consultancy by Teraret is Computer Hardware
              Repair and Reseller Based In Banglore and Chennai. We are
              Specialised in Computer Assembly, Server Assembly, Internet
              Network Setup. We also Buy ,Rent and Sell
              Laptops,Desktops,Projectors and Servers
            </p>
          </section>
        </div>
      </Row>,
    ];
  }
}

export default App;
