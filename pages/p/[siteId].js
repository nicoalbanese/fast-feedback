import { createFeedback } from "@/lib/db";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAllFeedback, getAllSites } from "../../lib/db-admin";
export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  };
}
export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
const FeedbackPage = ({ initialFeedback }) => {
  const [iterator, setIterator] = useState(1);

  const router = useRouter();
  console.log(initialFeedback);

  const handleNewFeedback = () => {
    createFeedback({
      author: "Nico Albanese",
      authorId: "BNi3RS4PS5bfLCI0kFg5WLyome02",
      text: `New feedback #${iterator}`,
      createdAt: new Date().toISOString(),
      provider: "Github",
      rating: 5,
      siteId: router.query.siteId,
      status: "Pending",
    });
    setIterator(iterator + 1);
  };

  if (initialFeedback.length) {
    return (
      <Box as='main' height='100vh' w='full' background='blue.100'>
        <Flex direction='column' alignItems='center' w={"50%"} maxWidth="700px" minWidth={"500px"} mx='auto'>
          <Button my={8} w='150px' onClick={handleNewFeedback}>
            Add New Item!
          </Button>
          {initialFeedback.map((item) => (
            <Box w="full" background="gray.50" rounded="lg" boxShadow="0px 2px 0px 2px #C0C1C2" p={8} key={item.id} mb={8}>
              <Heading fontSize='lg'>{item.text}</Heading>
              <Text>{item.author}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    );
  }

  return <Box>Site ID: ${router.query.siteId}</Box>;
};
export default FeedbackPage;
