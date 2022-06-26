import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import debounce from "debounce";
import axios from "axios";

const Cards = ({ data, setTickets }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearch = (e) => setSearchTerm(e?.target?.value);
  const debouncedSearch = debounce(updateSearch, 1000);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://challenge-alkemy-backend.vercel.app/tickets/${id}`
      );
      setTickets(data.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      gap={["1rem", "1rem", "1rem", "1.3rem"]}
      w="100%"
      minW="50%"
      flexDir="column"
    >
      <Box>
        <SearchBar search={debouncedSearch} />
      </Box>
      <Box p="0 11px">
        <Box
          w="89%"
          minW="80%"
          display={["none", "none", "none", "flex"]}
          borderRadius="10px"
          bgColor="#816797"
          justifyContent="space-between"
          fontWeight={600}
          color="#fff"
          p="1rem 3rem 1rem 4rem"
        >
          <Text>Title</Text>
          <Text ml="1rem">Cash</Text>
          <Text>Date</Text>
          <Text>Category</Text>
          <Text>Type</Text>
        </Box>
      </Box>
      <Flex
        h="310px"
        w="100%"
        p="0rem 0.7rem 2rem"
        overflowY="auto"
        flexDirection="column"
        gap="1.6rem"
      >
        {data
          ?.filter((card) => {
            if (searchTerm === "") {
              return card;
            } else if (
              card.category
                .toLowerCase()
                .includes(searchTerm.toString().toLowerCase())
            ) {
              return card;
            }
            return false;
          })
          .map((card) => (
            <Card key={card.id} handleDelete={handleDelete} card={card} />
          ))}
      </Flex>
    </Flex>
  );
};

export default Cards;
