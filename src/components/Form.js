import React from "react";
import { Box, Flex, Radio, RadioGroup, Select, Text } from "@chakra-ui/react";
import "./_form.css";
const Form = () => {
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px",
    minWidht: "160px",
    padding: "2rem 2rem",
    backgroundColor: "#191915",
    margin: "2rem auto",
    borderRadius: "1rem",
    boxShadow: "0 10px 25px rgba(92,99,105,.2)",
  };
  const data = [
    { id: 1, name: "Title", type: "text" },
    { id: 2, name: "Cash", type: "number" },
    { id: 3, name: "Date", type: "text" },
  ];
  const category = [
    { id: 1, name: "not-qualified" },
    { id: 2, name: "Home" },
    { id: 3, name: "Hobby" },
    { id: 4, name: "Health" },
    { id: 5, name: "Education" },
    { id: 6, name: "Food" },
  ];

  return (
    <Flex>
      <form style={formStyles}>
        <Box>
          {data?.map((elem) => (
            <div key={elem.id} className="form-div">
              <input
                type={elem.type}
                className="form-input"
                placeholder=" "
              ></input>
              <label className="form-label">{elem.name}</label>
            </div>
          ))}
        </Box>
        <Box color="#fff">
          <Text m="0 0 7px 0" textAlign="start">
            Type :
          </Text>
          <RadioGroup
            display="flex"
            flexDir={["column", "unset", "unset", "unset"]}
            gap={["0.3rem", "1rem", "1rem", "1rem"]}
          >
            <Radio value="incomes">Incomes</Radio>
            <Radio value="egress">Egress</Radio>
          </RadioGroup>
        </Box>
        <Flex flexDirection="column" gap="0.7rem">
          <Text color="#fff">Select a Category :</Text>
          <Select color="#fff" bgColor="none">
            {category.map((i) => (
              <option style={{ backgroundColor: "#2d3148" }} key={i.id}>
                {i.name}
              </option>
            ))}
          </Select>
        </Flex>
      </form>
    </Flex>
  );
};
export default Form;
