import React from "react";
import {Image, DropdownButton,Dropdown} from 'react-bootstrap'

import image from "./emptyProfilePic.png"
const AccountIcon = ()=>{
    return(
        <div>
            <DropdownButton 
                title = { <Image src ={image} roundedCircle width={"50"} />}
                noCaret bg="dark" variant="dark">
          <Dropdown.Item>User Profile</Dropdown.Item >
          <Dropdown.Item>Setting</Dropdown.Item >
          <Dropdown.Divider />
          <Dropdown.Item>Logout</Dropdown.Item>
       </DropdownButton>
        </div>
    )
}

export default AccountIcon