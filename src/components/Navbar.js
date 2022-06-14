import React from "react";
import Logo from "./Logo";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { navbarLinks, navbarLinksHover } from "./_styles";

const Navbar = () => {
  return (
    <Box bgColor="#816797" fontFamily="cursive">
      <Container maxW="95%" m="0 auto" p="0" color="#fff">
        <Flex justifyContent="space-between" align="center" p="1rem">
          <Link to="/">
            <Flex align="center" gap="1rem">
              <Box w="35px" minW="27px" h="35px" minH="27px">
                <Logo />
              </Box>
              <Heading fontSize={["1rem", "1rem", "1.4rem", "1.4rem"]}>
                My finances
              </Heading>
            </Flex>
          </Link>
          <Flex
            display={["none", "none", "flex", "flex"]}
            fontWeight={600}
            gap="2rem"
          >
            <Box style={navbarLinks} _hover={navbarLinksHover}>
              <Link to="/">New Ticket</Link>
            </Box>
            <Box style={navbarLinks} _hover={navbarLinksHover}>
              <Link to="/">Login</Link>
            </Box>
            <Box style={navbarLinks} _hover={navbarLinksHover}>
              <Link to="/">Register</Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
