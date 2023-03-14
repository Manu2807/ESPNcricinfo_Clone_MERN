import React from 'react'
import { Image,Heading,Box,Flex } from '@chakra-ui/react'
const Sideimg = () => {
    return (
      <h1>
        <Image
          position="fixed"
          h="100vh"
          right="0px"
          width="60%"
          src="https://images.unsplash.com/photo-1522778590545-a5a925dcf6f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Fantasy Image"
          objectFit="cover"
          
        />
        <Box
          zIndex="2"
          gap="5"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          right="6%"
          position="fixed"
          top="27%"
        >
          {/* <Image
            w="40"
            src="https://espn.wonderwins.com/assets/images/main_logo.png"
          /> */}
          <Flex gap="5" flexDirection="row">
            <Heading color="yellow">INDIA'S COOLEST</Heading>
            <Heading color="yellow">FANTASY PLATFORM</Heading>
          </Flex>
          <Heading size="md" color="white">
            Download the App
          </Heading>
        
        </Box>
      </h1>
    );
}

export default Sideimg