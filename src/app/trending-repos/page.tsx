// import { getTrendingRepos } from "@/graphql/trendingRepos";
import { RSCGithubTrendingRepos } from "@/components/rsc/RSCGithubTrendingRepos";

export default async function Page() {
  // const { data } = await getClient().query({
  //   query: getTrendingRepos,
  // });
  // return <RSCGithubTrendingRepos trendRepos={data} />;
  return <>Trending-repos</>;
}
