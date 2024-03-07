import React from "react";
import { Box, Button, Flex, Heading, Stack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaMapMarkedAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Join the Adventure</Heading>
          <Heading fontSize={"lg"} color={"gray.600"}>
            Sign up to discover the best events around you
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <Button leftIcon={<FaGoogle />} colorScheme={"red"} w={"full"}>
              Sign-Up with Google
            </Button>
            <Button leftIcon={<FaGoogle />} colorScheme={"green"} w={"full"}>
              Member Login with Google
            </Button>
            <Button leftIcon={<FaMapMarkedAlt />} colorScheme={"blue"} w={"full"}>
              Free Browsing
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Index;
