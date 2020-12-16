import React from "react";
import { DropdownItem, NavLink } from "reactstrap";

function NavDropdownItem(props) {
  return (
    <DropdownItem tag="li">
      <NavLink href={props.href}>{props.children}</NavLink>
    </DropdownItem>
  );
}

export default NavDropdownItem;
