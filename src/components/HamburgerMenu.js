import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const HamburgerMenu = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <Box
        display={menuOpen ? "flex" : "none"}
        h="100%"
        w={["60%", "50%", "40%"]}
        bgColor="#101022e6"
        p="2rem"
        position="fixed"
        left="0"
        top="0"
        justifyContent="space-between"
        zIndex="200"
        transition="0.9s"
        flexDirection="column"
      >
        <Flex gap={4} flexDirection="column">
          <Box onClick={() => setMenuOpen()}>
            <Link to="/">Home</Link>
          </Box>
          <Box onClick={() => setMenuOpen()}>
            <Link to="/statistic">Statistic</Link>
          </Box>
          <Box onClick={() => setMenuOpen()}>
            <Link to="/form">New Ticket</Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default HamburgerMenu;
