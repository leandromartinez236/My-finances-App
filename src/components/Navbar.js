import React, { useState } from "react";
import Logo from "./Logo";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { navbarLinks, navbarLinksHover } from "./_styles";
import HamburgerMenu from "./HamburgerMenu";
import { ReactDimmer } from "react-dimmer";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box bgColor="#816797">
      <Container maxW="95%" m="0 auto" p="0" color="#fff">
        <Flex justifyContent="space-between" align="center" p="1rem">
          <Link to="/">
            <Flex align="center" gap="1rem">
              <Box w="35px" minW="25px" h="35px" minH="25px">
                <Logo />
              </Box>
              <Heading
                textAlign="center"
                fontSize={["1rem", "1rem", "1.4rem", "1.4rem"]}
              >
                My Finances
              </Heading>
            </Flex>
          </Link>
          <Flex
            display={["none", "none", "flex", "flex"]}
            fontWeight={600}
            gap="2rem"
          >
            <Box style={navbarLinks} _hover={navbarLinksHover}>
              <Link to="/statistic">Statistic</Link>
            </Box>
            <Box style={navbarLinks} _hover={navbarLinksHover}>
              <Link to="/form">New Ticket</Link>
            </Box>
          </Flex>
          <Box display={["unset", "unset", "none", "none"]}>
            <GiHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
            <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <ReactDimmer
              isOpen={menuOpen}
              exitDimmer={setMenuOpen}
              zIndex={100}
              blur={1}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
