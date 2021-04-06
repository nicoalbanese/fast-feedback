import { Button, Heading, Text, Code, Flex } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import Head from "next/head";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      maxW="300px"
      w="full"
      mx="auto"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SunIcon w="30" h="30" color="red.700" />
      <Text textAlign="center">
        Current user: <Code>{auth.user ? auth.user.email : "None"}</Code>
      </Text>
      {!auth?.user ? (
        <Button
          mt={4}
          size="sm"
          onClick={(e) => auth.signinWithGithub()}
        >
          Sign In
        </Button>
      ) : (
        <Button mt={4} onClick={() => auth.signout()}>Sign Out</Button>
      )}
    </Flex>
  );
}
