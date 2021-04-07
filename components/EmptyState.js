import React from "react";
import { Box, Heading, Stack, Text, Button } from "@chakra-ui/react";
const EmptyState = () => {
  return (
    <Box
      backgroundColor="white"
      ml={0}
      mr={0}
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
    >
      <Box
        backgroundColor="gray.50"
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        height="40px"
      />
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        p={16}
        borderRadius={8}
      >
        <Heading h={10}size="lg">You haven’t added any sites.</Heading>
        <Text h={10}>Welcome 👋🏼 Let’s get started.</Text>
        <Button
          maxWidth="200px"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt="8"
          _hover={{ bg: "gray.700" }}
          _active={{
            bg: "gray.800",
            transform: "scale(0.95)",
          }}
        >
          Add Your First Site
        </Button>
      </Stack>
    </Box>
  );
};
export default EmptyState;
