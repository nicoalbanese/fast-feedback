import DashboardShell from "@/components/DashboardShell";
import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import useSWR from "swr";
import fetcher from "utils/fetcher";

const Dashboard = () => {
  const auth = useAuth();

  const { data } = useSWR("/api/sites", fetcher);
  console.log(data);

  console.log(auth.user);
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

  return <DashboardShell>Hello</DashboardShell>;
};

export default Dashboard;
