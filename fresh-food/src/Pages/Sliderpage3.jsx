import React from "react";
import { Box, Stack, Flex, Button, Divider } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Sliderpage3() {
  return (
    <div>
      <Box
        textAlign="left"
        fontSize="22px"
        fontWeight="600"
        color="gray.700"
        pt="7"
      >
        <h1>Breakfast & Snacking Specials</h1>
      </Box>
      <Splide
        options={{
          perPage: 3
        }}
      >
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
        <SplideSlide>
          <Box mr="4">
            <Stack
              w="100%"
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              textAlign="left"
              mt="4"
            >
              <Box
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/71da135c-a6fc-502c-f1f9-70d4961a44e5/original/p2_tile_images_6th_folder-03_(2).jpg?format=webp"
                  alt="img"
                  bg="white"
                  mb="2"
                  rounded="lg"
                />
              </Box>
              <Box p={2.5}>
                <Box fontSize="15px">
                  <b>Rohu (Rui) Medium - Bengali Cut, No Head</b>
                </Box>
                <br />
                <Box fontSize="14px" pb={3}>
                  Nakhre that fly fish to you, cut & cleaned for curries
                </Box>
                <Box fontSize="14px" pb={3}>
                  <b>500gms</b>{" "}
                </Box>
                <Flex justifyContent="space-between" pb={3}>
                  <Box fontSize="16px" color="red.600" fontWeight="600">
                    {" "}
                    MRP: ₹259
                  </Box>
                  <Box>
                    <Button size="xs" colorScheme="red" p={4}>
                      ADD TO CART
                    </Button>
                  </Box>
                </Flex>
                <Divider />
                <Flex justifyContent="center" color="gray.500" p={1}>
                  <Box>
                    <img
                      src="https://www.licious.in/img/rebranding/express_delivery.svg"
                      alt="img"
                    />
                  </Box>
                  <Box pl={2.5}>
                    Today in 90<b>min</b>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </SplideSlide>
      </Splide>
    </div>
  );
}
export default Sliderpage3;
