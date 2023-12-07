import React from "react";

import { Nav, NavLink, NavMenu } from "./Navbar";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/ManagePrinter" activeStyle>
            Manage Printer
          </NavLink>
          <NavLink to="/ManageUser" activeStyle>
            Manage Users
          </NavLink>
          <NavLink to="/SystemConfig" activeStyle>
            System Configuration
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
