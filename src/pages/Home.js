import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <Box>
      <Flex bgColor="#1B2430">
        <Flex
          h="fit-content"
          gap="2rem"
          flexDirection={["column", "column", "unset", "unset"]}
          minW="90%"
          m="2rem auto 0rem"
          p="0"
        >
          <Box
            fontWeight={600}
            borderRadius="10px"
            boxShadow="3px 4px 10px -1px #050404"
            textAlign="center"
            w={["80%", "70%", "30%", "30%"]}
            p={["2rem ", "2rem 3rem", "2rem 1rem", "2rem 3rem"]}
            bgColor="#171a36"
            m="auto"
            color="#fff"
          >
            <Text mb="1rem">Actual Balance</Text>
            <Text fontSize="1.3rem">$100.000</Text>
          </Box>
          <Cards />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
