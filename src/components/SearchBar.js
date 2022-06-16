import { Flex, FormControl, Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ search }) => {
  return (
    <>
      <FormControl
        fontFamily="cursive"
        ml="1rem"
        color="#fff"
        outline="none"
        w={["70%", "60%", "50%", "40%"]}
      >
        <Flex align={"center"} gap={2}>
          <Input
            outline="1px solid white"
            border="none"
            id="search"
            type="text"
            color="#fff"
            placeholder="Filter Category"
            py={2}
            onChange={search}
          />
        </Flex>
      </FormControl>
    </>
  );
};
export default SearchBar;
