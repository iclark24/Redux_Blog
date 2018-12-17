import React from "react";
import { Menu, } from "semantic-ui-react"
import {Link, } from "react-router-dom"

const NavBar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Blogs
      </Menu.Item>
    </Link>
  </Menu>
);

export default NavBar;