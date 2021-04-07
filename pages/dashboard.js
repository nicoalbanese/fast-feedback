import DashboardShell from "@/components/DashboardShell";
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import SiteTable from "@/components/SiteTable";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";

const Dashboard = () => {
  const auth = useAuth();

  const { data } = useSWR("/api/sites", fetcher);
  console.log(data);
  console.log(auth);

  if (auth.user == false) {
    return (
      <Flex
        h='100vh'
        w='full'
        bg='gray.100'
        justifyContent='center'
        alignItems='center'
      >
        <Heading fontSize='2xl'>
          Please login{" "}
          <Link href='/'>
            <Text
              display='inline-block'
              color='blue.300'
              textDecoration='underline'
              cursor="pointer"
              _hover={{color:"blue.700"}}
            >
              here
            </Text>
          </Link>
          .
        </Heading>
      </Flex>
    );
  }
  if (auth.loading) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  //   if (auth.userType == "free") {
  //     return (
  //       <DashboardShell>
  //         <EmptyState />
  //       </DashboardShell>
  //     );
  //   }

  return (
    <DashboardShell>
      {auth.user && data ? (
        <SiteTable sites={data.sites} />
      ) : (
        <SiteTableSkeleton />
      )}
    </DashboardShell>
  );
};

export default Dashboard;
