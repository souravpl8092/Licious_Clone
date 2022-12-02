import React from "react";
import { Box, Grid, Stack, Flex, Button } from "@chakra-ui/react";

function ExplorePage() {
  return (
    <div>
      <Box>
        <Box
          bg="#fbebee"
          w="50%"
          m="auto"
          p="5"
          borderRadius="10px"
          boxShadow="md"
        >
          <Flex>
            <Box p="2" mr="2">
              <img
                src="https://www.licious.in/img/rebranding/rewards/rewards_icon.svg"
                alt="logo"
                w="85%"
                size="sm"
              />
            </Box>
            <Box w="90%">
              <Box>
                <Flex justifyContent="space-between" fontSize="14px">
                  <Box>
                    <b>My Rewards</b>
                  </Box>
                  <Box
                    size="xs"
                    color="red.500"
                    fontSize="12px"
                    fontWeight="600"
                  >
                    CLICK TO VIEW{" "}
                  </Box>
                </Flex>
                <Box
                  fontSize="12px"
                  textAlign="left"
                  fontWeight="medium"
                  mt="2"
                >
                  Place an order and win your next reward!
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <br />
      <Box w="100%" bg="gray.50">
        <Box w="78%" m="auto" pt="40px" pb="20px">
          <Box
            textAlign="left"
            fontSize="22px"
            fontWeight="bold"
            color="gray.600"
            pb="2.5"
          >
            <h1>Explore by category</h1>
          </Box>
          <Grid templateColumns="repeat(4, 1fr)">
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Chicken</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Fish & Seafood</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Mutton</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Ready to Cook</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Prawn</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Cold Cuts</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Spreads</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Eggs</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Biryani & Kebab</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Combos</b>
              </h1>
            </Stack>
            <Stack p={2.5}>
              <Box
                p={2.5}
                rounded="lg"
                color="gray.600"
                boxShadow="lg"
                bg="white"
                mb="2"
              >
                <img
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Plant-Based-Meat</b>
              </h1>
            </Stack>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default ExplorePage;
