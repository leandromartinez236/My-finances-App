import { Box, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const { data } = await axios.get(
          `https://challenge-alkemy-backend.vercel.app/tickets`
        );
        setTickets(data?.tickets);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getTickets();
  }, []);

  return (
    <Box h="100vh">
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
          {!IsLoading ? (
            <Spinner />
          ) : (
            <Cards setTickets={setTickets} data={tickets} />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
