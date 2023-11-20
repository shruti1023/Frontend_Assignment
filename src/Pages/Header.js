import React from 'react'
import {Box, Text} from "@chakra-ui/react";

const Header = () => {
  return (
    <Box width={"100%"} display = "flex" padding={["0px" , "10px"]} backgroundColor={"#164863"} alignItems={"center"} justifyContent={"space-between"}>
      
        <Box  display = "flex" alignItems={"center"}  justifyContent={"space-between"} gap={"12px"} >
            
            <Text color={"white"} fontFamily={"heading"} fontSize={["2xl", '4xl']} >Create Form</Text>
        </Box>    
    </Box>
  )
}

export default Header;
