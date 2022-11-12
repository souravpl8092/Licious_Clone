import React from "react";
import Cart from "./Cart";
import Categories from "./Categories";
import Profile from "./Profile";
import { GoLocation } from "react-icons/go";
import {
  InputGroup,
  Input,
  InputRightElement,
  HStack,
  Box,
  Spacer,
  Flex,
  Divider
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
function Navbar() {
  return (
    <div>
      <HStack w="75%" h="90" m="auto" mt="1%" spacing="10">
        <Box w="20%">
          <img
            src="https://www.licious.in/img/rebranding/licious-logo.svg"
            alt="logo"
            w="100%"
            size="lg"
          />
        </Box>

        <Box w="24%" h="10">
          <Flex gap={1.5}>
            <Box w="5" color="gray.800">
              <GoLocation size="sm" />
            </Box>
            <Box fontSize="sm" color="gray.500">
              <h4>BENGALURU</h4>
            </Box>
          </Flex>
        </Box>

        <Box w="100%">
          <InputGroup w="100%">
            <Input
              type="text"
              placeholder="Search for any delicious product"
              bg="gray.100"
              w="200%"
              size="lg"
            />
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon color="gray.800" />}
            />
          </InputGroup>
        </Box>
        <Spacer />
        <Box w="10%" h="10">
          <Categories />
        </Box>
        <Spacer />
        <Box w="10%" h="10">
          <Profile />
        </Box>
        <Spacer />
        <Box w="10%" h="10">
          <Cart />
        </Box>
      </HStack>
      <Divider />
    </div>
  );
}

export default Navbar;
