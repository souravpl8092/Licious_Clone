import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";

function Profile() {
  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<CiUser size="28" />}
          colorScheme="black"
          variant="link"
          size="sm"
          fontWeight="10"
        >
          Profile
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px">
            <span>Account</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <span>My Rewards</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <span>My orders</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <span>Refer a friend</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem minH="48px">
            <span>Logout</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Profile;
