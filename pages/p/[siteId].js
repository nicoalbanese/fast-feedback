import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  console.log(initialFeedback);

  if (initialFeedback.length) {
    return <Box height="100vh" w="full" background="blue.100">
      {initialFeedback.map(item => <h3 key={item.id}>{item.text}</h3>)}
    </Box>;
  }

  return <Box>Site ID: ${router.query.siteId}</Box>;
};
export default FeedbackPage;
