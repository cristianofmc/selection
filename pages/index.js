import Head from "next/head";
import Hero from "../components/Hero";
import MenuItem from "../components/MenuItem";
import Projects from "../components/Projects";
import TopicSearch from "../components/TopicSearch";
import { getUserDetails, getReposDetails, filterReposByTopics,} from "../lib/github-api";
import { useState } from "react";

function Home(props) {
  const [tagSearch, setTagSearch] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;

    const value = e.target.value.trim();
    if (!value) return;

    if(!tagSearch.includes(value)){
      setTagSearch([...tagSearch, value]);
    }

    e.target.value = "";
  };

  const removeTagByIndex = (index) => {
    setTagSearch(tagSearch.filter((ele, i) => i !== index));
  };

  const filteredRepos = filterReposByTopics(props.repos, tagSearch);

  return (
    <div className="max-w-7xl mx-auto sm:px-6 md:px-8 mb-4 font-roboto">
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
        <TopicSearch
          onKeyDown={handleKeyDown}
          tags={tagSearch}
          onRemove={removeTagByIndex}
        />
      </div>
      <section className="mt-4">
        <Projects>{filteredRepos}</Projects>
      </section>
    </div>
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
