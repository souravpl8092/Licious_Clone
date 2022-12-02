import React from "react";
import { Box } from "@chakra-ui/react";
import Sliderpage from "./Sliderpage";
import Sliderpage2 from "./Sliderpage2";
import Sliderpage3 from "./Sliderpage3";
import Categories from "./Categories";
import ExplorePage from "./ExplorePage";
import BlogPage from "./BlogPage";

function Home() {
  return (
    <div>
      <Box bg="gray.50">
        <Categories />
        <Box w="75%" m="auto" bg="gray.50">
          <Sliderpage />
          <br />
          <Sliderpage2 />
          <br />
        </Box>
        <ExplorePage />
        <Box bg="gray.50">
          <Box w="75%" m="auto" bg="gray.50">
            <Sliderpage3 />
            <br />
            <BlogPage />
          </Box>
        </Box>
        <br />
      </Box>
    </div>
  );
}

export default Home;
