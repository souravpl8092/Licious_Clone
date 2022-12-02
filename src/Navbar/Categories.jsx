import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Image
} from "@chakra-ui/react";
import { BiCategory } from "react-icons/bi";
function Categories() {
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<BiCategory size="28" />}
          colorScheme="black"
          variant="link"
          size="sm"
          fontWeight="10"
        >
          Categories
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png"
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            <span>Today's Deal</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
              alt="Chicken"
              mr="12px"
            />
            <span>Chicken</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png"
              alt="Fish & Seafood"
              mr="12px"
            />
            <span>Fish & Seafood</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png"
              alt="Mutton"
              mr="12px"
            />
            <span>Mutton</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png"
              alt="Ready to Cook"
              mr="12px"
            />
            <span>Ready to Cook</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png"
              alt="Prawns"
              mr="12px"
            />
            <span>Prawns</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png"
              alt="Cold Cuts"
              mr="12px"
            />
            <span>Cold Cuts</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png"
              alt="Spread"
              mr="12px"
            />
            <span>Spread</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png"
              alt="Eggs"
              mr="12px"
            />
            <span>Ready to Cook</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Categories;
