import { getUserDetails, getReposDetails, filterReposByTopics,} from "../lib/github-api";
import Head from "next/head";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
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
      <noscript>Your browser does not support JavaScript!</noscript>
      <div className="max-w-7xl mx-auto sm:px-6 md:px-8 mb-4 text-hero-black font-roboto">
        <Head>
          <title>{props.user.name}</title>
        </Head>
        <Hero>{props.user.name}</Hero>
        <Menu>
          <MenuItem href="">Projects</MenuItem>
          <MenuItem href="about">About</MenuItem>
          <MenuItem href="contact">Contact</MenuItem>
        </Menu>
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
