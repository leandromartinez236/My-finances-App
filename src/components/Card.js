import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

const Card = ({ card }) => {
  return (
    <Box
      bgColor="#51557E"
      boxShadow="3px 2px 7px 1px #050404"
      color="#fff"
      borderRadius="10px"
      p="1rem 2rem"
    >
      <Flex
        color="#fff"
        fontWeight={600}
        align="center"
        textAlign="center"
        flexDir={["column", "column", "column", "unset"]}
        justifyContent={["unset", "unset", "space-between", "space-between"]}
        h={["fit-content", "fit-content", "fit-content", "53px"]}
      >
        <Text overflow="hidden" w="100px" h="25px">
          {card.title}
        </Text>
        <Text w="70px">${card.cash}</Text>
        <Text w="fit-content">{card.date}</Text>
        <Text w="80px">{card.category}</Text>
        <Flex align="center" gap={["0.4rem", "0.4rem", "0.4rem", "0.8rem"]}>
          <Box
            borderRadius="50%"
            w="10px"
            h="10px"
            bgColor={card.type === "incomes" ? "#00CC63" : "red"}
          ></Box>
          <Text>{card.type}</Text>
        </Flex>
        <Flex
          justifyContent={[
            "space-between",
            "space-between",
            "space-between",
            "unset",
          ]}
          flexDir={["row", "row", "row", "column"]}
          gap={["0", "0", "0", "1.2rem"]}
          w={["100%", "100%", "100%", "fit-content"]}
        >
          <Box _hover={{ color: "#00CC63" }}>
            <HiPencilAlt fontSize="1.2rem" />
          </Box>
          <Box _hover={{ color: "red" }}>
            <FaTrash />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
