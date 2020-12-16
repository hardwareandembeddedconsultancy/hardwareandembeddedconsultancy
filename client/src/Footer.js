import React from "react";

import advancedgrails from "./images/buy.svg";
import documentation from "./images/sell.svg";
import slack from "./images/repair.svg";
import { Row } from "reactstrap";

const Footer = () => {
  return (
    <Row className="footer" key={3}>
      <div className="col-md-4">
        <a
          href="http://guides.grails.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={advancedgrails}
            alt="Grails Guides"
            className="float-left"
          />
        </a>
        <strong className="centered">
          <a
            href="http://guides.grails.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy
          </a>
        </strong>
        <p>You can Buy Laptops,Desktops,Server,Network Equipments and Etc</p>
      </div>
      <div className="col-md-4">
        <a
          href="http://docs.grails.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={documentation}
            alt="Grails Documentation"
            className="float-left"
          />
        </a>
        <strong className="centered">
          <a
            href="http://docs.grails.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sell
          </a>
        </strong>
        <p>Sell your Laptops,Desktops,Projector,Network equipment,Led TV.</p>
      </div>

      <div className="col-md-4">
        <a
          href="https://grails-slack.cfapps.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={slack} alt="Slack Guides" className="float-left" />
        </a>
        <strong className="centered">
          <a
            href="https://grails-slack.cfapps.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repair
          </a>
        </strong>
        <p>
          Door step pickup and Drop for Laptop,Desktop,Projector,CCTV and
          Network Equipment
        </p>
      </div>
    </Row>
  );
};

export default Footer;
