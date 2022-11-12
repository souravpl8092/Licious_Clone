import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
  Box,
  Flex
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<AiOutlineShoppingCart size="28" />}
        colorScheme="black"
        variant="link"
        size="sm"
        fontWeight="10"
      >
        Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Order Summary</DrawerHeader>

          <DrawerBody>
            <Box border="1px solid gray" p="4" lineHeight="2">
              <h1>
                <b>BILL DETAILS</b>{" "}
              </h1>
              <p>SubTotal</p>
              <p>Delivery Charge</p>
              <p>Discout</p>
              <Divider />
              <hr />
              <h4>
                <b>Total</b>{" "}
              </h4>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Box w="100%">
              <Flex w="100%">
                <Box w="100%">
                  <Button
                    bg="whiteAlpha.900"
                    variant="outline"
                    w="100%"
                    borderRadius="0"
                    boxShadow="dark-lg"
                    p="6"
                  >
                    Total :{" "}
                  </Button>
                </Box>
                <Box w="100%">
                  <Button
                    variant="outline"
                    mr={3}
                    onClick={onClose}
                    bg="gray.100"
                    w="100%"
                    boxShadow="dark-lg"
                    p="6"
                  >
                    Proceed to checkout
                  </Button>
                </Box>
              </Flex>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Cart;
