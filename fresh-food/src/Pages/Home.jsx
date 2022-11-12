import React from "react";
import { Box, Grid, Stack, Flex, Button } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

/* const slideImages = [
  {
    url:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ac53a507-4bdd-92cd-ee0b-c96281e04999/original/chicken-curry-cut.jpg?format=webp",
    title: "Chicken Curry Cut - Small Pieces",
    Desc: "Fresh nakhre for fresh, juicy & tender chicken thigh cuts",
    weight: "450grms",
    price: "339"
  },
  {
    url:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4cad2ee9-9257-9109-62a1-da4082b2cf36/original/sho.jpg?format=webp",
    title: "Chicken Curry Cut - Small Pieces",
    Desc: "Fresh nakhre for fresh, juicy & tender chicken thigh cuts",
    weight: "450grms",
    price: "339"
  },
  {
    url:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/fcea4075-0ed2-23c1-2b3f-1cddcbd1d11f/original/Chicken-Breast-Boneless-(3-4-Pieces)-Hero-Shot_(1).jpg?format=webp",
    title: "Chicken Curry Cut - Small Pieces",
    Desc: "Fresh nakhre for fresh, juicy & tender chicken thigh cuts",
    weight: "450grms",
    price: "339"
  },
  {
    url:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a917c576-c350-375a-afad-4882c7fd85a8/original/Classic-Eggs---Pack-of-12-Hero-Shot.jpg?format=webp",
    title: "Chicken Curry Cut - Small Pieces",
    Desc: "Fresh nakhre for fresh, juicy & tender chicken thigh cuts",
    weight: "450grms",
    price: "339"
  }
]; */
function Home() {
  return (
    <div>
      <Box w="100%" bg="gray.50">
        <Box rounded="md" bg="white" mb="10" m="auto">
          <img
            src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63617b4964e45"
            alt="img"
          />
        </Box>
        <hr />
        <Box w="78%" m="auto" pt="40px" pb="20px">
          <Box
            textAlign="left"
            fontSize="22px"
            fontWeight="bold"
            color="gray.600"
          >
            <h1>Shop by categories</h1>
          </Box>
          <Box fontSize="14px" textAlign="left" color="gray.600" pb="20px">
            Freshest meats just for you
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
                  src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                  alt="img"
                  bg="white"
                  mb="2"
                />
              </Box>
              <h1>
                <b>Today's Deals</b>
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
        <Box
          bg="#ffdc93"
          w="50%"
          m="auto"
          p="2"
          borderRadius="10px"
          boxShadow="xl"
          mb="10"
        >
          <Flex justifyContent="space-between">
            <Box p="4">
              <img
                src="https://www.licious.in/img/rebranding/loyalty_licious_logo.svg"
                alt="logo"
                w="85%"
                size="lg"
              />
            </Box>
            <Box>
              <Button size="sm" bg="#d11243" color="whiteAlpha.900">
                JOIN NOW
              </Button>
            </Box>
          </Flex>
          <hr />
          <Box fontSize="12px" textAlign="left" fontWeight="medium">
            Join MEATOPIA to get free delivery on all orders with cart value
            more than Rs.99.
          </Box>
        </Box>
        <Box ml="250px">
          <img
            src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/4c895baf-28fb-2833-8d19-37d05c51d39c/original/static-bank-units-Sep-web_(11).jpg?format=webp"
            alt="img"
          />
        </Box>
        <Box
          bg="#f1a94b"
          w="60%"
          borderRadius="10px"
          m="auto"
          mt="12"
          size="xs"
          p="4"
        >
          <Flex>
            <Box w="5%">
              <img
                src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_referral_banner_icon.png"
                alt="img"
                size="xs"
              />
            </Box>
            <Box color="whiteAlpha.900" fontSize="28px" ml="10">
              <h1>Invite friends and get Rs 200 per referral</h1>
            </Box>
          </Flex>
        </Box>
        <Box w="70%" m="auto">
          <Splide
            options={{
              perPage: 4
            }}
          >
            <SplideSlide>
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
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                    alt="img"
                    bg="white"
                    mb="2"
                  />
                </Box>
                <h1>
                  <b>Today's Deals</b>
                </h1>
              </Stack>
            </SplideSlide>
            <SplideSlide>
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
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                    alt="img"
                    bg="white"
                    mb="2"
                  />
                </Box>
                <h1>
                  <b>Today's Deals</b>
                </h1>
              </Stack>
            </SplideSlide>
            <SplideSlide>
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
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                    alt="img"
                    bg="white"
                    mb="2"
                  />
                </Box>
                <h1>
                  <b>Today's Deals</b>
                </h1>
              </Stack>
            </SplideSlide>
            <SplideSlide>
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
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                    alt="img"
                    bg="white"
                    mb="2"
                  />
                </Box>
                <h1>
                  <b>Today's Deals</b>
                </h1>
              </Stack>
            </SplideSlide>
            <SplideSlide>
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
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                    alt="img"
                    bg="white"
                    mb="2"
                  />
                </Box>
                <h1>
                  <b>Today's Deals</b>
                </h1>
              </Stack>
            </SplideSlide>
            <SplideSlide>
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
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                    alt="img"
                    bg="white"
                    mb="2"
                  />
                </Box>
                <h1>
                  <b>Today's Deals</b>
                </h1>
              </Stack>
            </SplideSlide>
            <SplideSlide>
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
                    src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png"
                    alt="img"
                    bg="white"
                    mb="2"
                  />
                </Box>
                <h1>
                  <b>Today's Deals</b>
                </h1>
              </Stack>
            </SplideSlide>
          </Splide>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
