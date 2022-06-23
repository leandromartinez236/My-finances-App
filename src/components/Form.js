import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import "./_form.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [creatingItem, setCreatingItem] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [submitItem, setSubmitItem] = useState({
    title: "",
    cash: 1,
    // date: "",
    type: "",
    category: "not-qualified",
  });
  const submit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(
        `https://challenge-alkemy-backend.vercel.app/tickets/${params.id}`,
        submitItem
      );
    } else {
      await axios.post(
        `https://challenge-alkemy-backend.vercel.app/tickets/${1}`,
        submitItem
      );
    }
    setCreatingItem(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setSubmitItem({ ...submitItem, [e.target.name]: e.target.value });
  };
  const loadItems = async (id) => {
    const {
      data: { ticket },
    } = await axios.get(
      `https://challenge-alkemy-backend.vercel.app/tickets/${id}`
    );
    setSubmitItem({
      title: ticket.title,
      cash: ticket.cash,
      category: ticket.category,
    });
    setIsEditing(true);
  };

  useEffect(() => {
    if (params.id) {
      loadItems(params.id);
    }
  }, [params.id]);

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
  const category = [
    { id: 1, name: "not-qualified" },
    { id: 2, name: "home" },
    { id: 3, name: "hobby" },
    { id: 4, name: "health" },
    { id: 5, name: "education" },
    { id: 6, name: "food" },
  ];

  return (
    <Flex>
      <form onSubmit={submit} style={formStyles}>
        <Box>
          <div className="form-div">
            <input
              required
              type="text"
              name="title"
              className="form-input"
              placeholder=" "
              value={submitItem?.title}
              onChange={handleChange}
            ></input>
            <label className="form-label">Title</label>
          </div>
          <div className="form-div">
            <input
              required
              type="number"
              name="cash"
              className="form-input"
              placeholder=" "
              value={submitItem?.cash}
              onChange={handleChange}
            ></input>
            <label className="form-label">Cash</label>
          </div>
        </Box>
        {!isEditing && (
          <Box color="#fff">
            <Text m="0 0 7px 0" textAlign="start">
              Type :
            </Text>
            <RadioGroup
              aria-required
              display="flex"
              flexDir={["column", "unset", "unset", "unset"]}
              gap={["0.3rem", "1rem", "1rem", "1rem"]}
            >
              <Radio onChange={handleChange} name="type" value="incomes">
                Incomes
              </Radio>
              <Radio onChange={handleChange} name="type" value="egress">
                Egress
              </Radio>
            </RadioGroup>
          </Box>
        )}
        <Flex flexDirection="column" gap="0.7rem">
          <Text color="#fff">Select a Category :</Text>
          <Select
            value={submitItem?.category}
            name="category"
            onChange={handleChange}
            color="#fff"
            bgColor="none"
          >
            {category.map((i) => (
              <option
                value={i.name}
                style={{ backgroundColor: "#2d3148" }}
                key={i.id}
              >
                {i.name}
              </option>
            ))}
          </Select>
          {!creatingItem ? (
            <Spinner size="xl" />
          ) : (
            <Button colorScheme="teal" size="md" type="submit">
              Submit
            </Button>
          )}
        </Flex>
      </form>
    </Flex>
  );
};
export default Form;
