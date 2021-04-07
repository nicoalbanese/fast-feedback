import Link from "next/link";

import { useAuth } from "@/lib/auth";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { SunIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import AddSiteModal from "./AddSiteModal";
import { useRouter } from "next/router";

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();
  const router = useRouter();
  //   console.log(auth.user.email);
  return (
    <Box backgroundColor='gray.100' h='100vh'>
      <Flex backgroundColor='white' mb={16} w='full'>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          pt={4}
          pb={4}
          maxW='1250px'
          margin='0 auto'
          w='full'
          px={8}
        >
          <Flex alignItems='center'>
            <SunIcon w='30' h='30' color='red.700' />
            <Link href='/' mr={4}>
              <Box as='a' cursor='pointer' mx='8'>
                Sites
              </Box>
            </Link>
            <Link href='/'>Feedback</Link>
          </Flex>
          <Flex justifyContent='center' alignItems='center'>
            <Link href='/' mr={4}>
              <Box as='a' cursor='pointer' mx='8'>
                Account
              </Box>
            </Link>
            <Avatar
              size='sm'
              cursor='pointer'
              onClick={() => {
                signout();
                router.push("/");
              }}
              src={user?.photoUrl}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin='0 auto' direction='column' maxW='1250px' px={8}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent='space-between'>
          <Heading mb={8}>My Sites</Heading>
          <Button
            backgroundColor='gray.900'
            color='white'
            fontWeight='medium'
            _hover={{ bg: "gray.700" }}
            _active={{
              bg: "gray.800",
              transform: "scale(0.95)",
            }}
          >
            <AddSiteModal>+ Add Site</AddSiteModal>
          </Button>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
