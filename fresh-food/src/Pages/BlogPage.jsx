import { Box, Stack, Grid, Image } from "@chakra-ui/react";
function BlogPage() {
  return (
    <div>
      <Box>
        <Box
          textAlign="left"
          fontSize="22px"
          fontWeight="600"
          color="gray.600"
          pt="7"
          ml="2.5"
        >
          <h1>Check out our blog</h1>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)">
          <Stack p={2.5}>
            <Box
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              boxSize="350px"
            >
              <Image
                src="https://www.licious.in/blog/wp-content/uploads/2022/11/shutterstock_559553158-1.jpg"
                alt="img"
                bg="white"
                w="100%"
                h="100%"
                borderRadius="10px"
              />
            </Box>
            <Box textAlign="left" color="gray.600" fontSize="18px">
              <h1>
                <b>All about Chicken Salami</b>
              </h1>
            </Box>
          </Stack>
          <Stack p={2.5}>
            <Box
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              boxSize="350px"
            >
              <Image
                src="https://www.licious.in/blog/wp-content/uploads/2022/11/shutterstock_1920454280.jpg"
                alt="img"
                bg="white"
                w="100%"
                h="100%"
                borderRadius="10px"
              />
            </Box>
            <Box textAlign="left" color="gray.600" fontSize="18px">
              <h1>
                <b>
                  Sausages: Are Sausages Healthy? Health Benefits of Chicken
                  Sausages for A Healthy You!
                </b>
              </h1>
            </Box>
          </Stack>
          <Stack p={2.5}>
            <Box
              rounded="lg"
              color="gray.600"
              boxShadow="lg"
              bg="white"
              mb="2"
              boxSize="350px"
            >
              <Image
                src="https://www.licious.in/blog/wp-content/uploads/2022/10/blog-image-02.jpg"
                alt="img"
                bg="white"
                borderRadius="10px"
              />
            </Box>
            <Box textAlign="left" color="gray.600" fontSize="18px">
              <h1>
                <b>
                  Make Anda Paratha Rolls Special With Licious Chicken Lyoners!
                </b>
              </h1>
            </Box>
          </Stack>
        </Grid>
        <br />
        <Box w="200%">
          <Image
            src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db"
            alt="img"
          />
        </Box>
      </Box>
    </div>
  );
}
export default BlogPage;
