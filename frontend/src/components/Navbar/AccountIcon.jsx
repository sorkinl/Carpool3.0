import React from "react";
import { Image, DropdownButton, Dropdown } from "react-bootstrap";

import image from "./emptyProfilePic.png";
const AccountIcon = (props) => {
  return (
    <div className={props.className}>
      {props.isNavbar ? (
        <DropdownButton
          title={<Image src={image} roundedCircle width={props.width} />}
          noCaret
          bg="dark"
          variant="dark"
        >
          <Dropdown.Item>User Profile</Dropdown.Item>
          <Dropdown.Item href="/settings">Setting</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Logout</Dropdown.Item>
        </DropdownButton>
      ) : (
        <Image src={image} roundedCircle width={props.width} />
      )}
    </div>
  );
};

export default AccountIcon;
