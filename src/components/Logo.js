import React from "react";
import { Image } from "@chakra-ui/react";
import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <Image src={logo} alt="Logo" h="100%" w="100%" />
    </Link>
  );
};

export default Logo;
