import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import debounce from "debounce";

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearch = (e) => setSearchTerm(e?.target?.value);
  const debouncedSearch = debounce(updateSearch, 1000);
  const data = [
    {
      id: 1,
      title: "Work",
      cash: 5,
      date: "1/02/22",
      type: "incomes",
      category: "Home",
    },
    {
      id: 2,
      title: "Car",
      cash: 20000,
      date: "2/08/22",
      type: "egress",
      category: "Home",
    },
    {
      id: 3,
      title: "Led Tv",
      cash: 20,
      date: "3/02/22",
      type: "egress",
      category: "health",
    },
    {
      id: 31,
      title: "Meat",
      cash: 50,
      date: "23/02/22",
      type: "egress",
      category: "education",
    },
    {
      id: 4,
      title: "Ice cream",
      cash: 20,
      date: "23/02/22",
      type: "egress",
      category: "sin calificar",
    },
    {
      id: 5,
      title: "refrigerator",
      cash: 20,
      date: "23/02/22",
      type: "egress",
      category: "FOOD",
    },
    {
      id: 6,
      title: "Work",
      cash: 1536,
      date: "23/02/22",
      type: "incomes",
      category: "hobby",
    },
    {
      id: 7,
      title: "Work",
      cash: 25754,
      date: "23/02/22",
      type: "incomes",
      category: "hobby",
    },
  ];
  return (
    <Flex
      fontFamily="cursive"
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
          .filter((card) => {
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
            <Card key={card.id} card={card} />
          ))}
      </Flex>
    </Flex>
  );
};

export default Cards;
