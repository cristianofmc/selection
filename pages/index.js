import { getUserDetails, getReposDetails, filterReposByTopics,} from "../lib/github-api";
import Head from "next/head";
import Hero from "../components/Hero";
import MenuItem from "../components/MenuItem";
import Projects from "../components/Projects";
import TopicSearch from "../components/TopicSearch";
import { useState } from "react";
import TopicContext from "../lib/topicContext";

function Home(props) {
  const [topicSearch, setTopicSearch] = useState([]);

  const filteredRepos = filterReposByTopics(props.repos, topicSearch);

  return (
    <TopicContext.Provider value={[topicSearch, setTopicSearch]}>
      <div className="max-w-7xl mx-auto sm:px-6 md:px-8 mb-4 text-hero-black font-roboto">
        <Head>
          <title>{props.user.name}</title>
        </Head>
        <Hero>{props.user.name}</Hero>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 ">
          <MenuItem href="">Projects</MenuItem>
          <MenuItem href="about">About</MenuItem>
          <MenuItem href="contact">Contact</MenuItem>
        </div>
        <div className="mt-10">
          <TopicSearch/>
        </div>
        <section className="mt-4">
          <Projects>{filteredRepos}</Projects>
        </section>
      </div>
    </TopicContext.Provider>
  );
}

export async function getStaticProps() {
  const userDetails = await getUserDetails();
  const reposDetails = await getReposDetails();

  return {
    props: {
      user: userDetails,
      repos: reposDetails,
    },
    revalidate: 1,
  };
}

export default Home;
