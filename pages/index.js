import { getUserDetails, getReposDetails, filterReposByTopics,} from "../lib/github-api";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Projects from "../components/Projects";
import TopicSearch from "../components/TopicSearch";
import { useState } from "react";
import TopicContext from "../lib/topicContext";
import HeadComponent from "../components/HeadComponent";

function Home(props) {
  const [topicSearch, setTopicSearch] = useState([]);
  console.log(props);
  const filteredRepos = filterReposByTopics(props.repos, topicSearch);
  const menuItems = [
    { name: 'Projects', href: ''},
    { name: 'About', href: 'about'},
    { name: 'Contact', href: 'contact'}
  ]

  return (
    <TopicContext.Provider value={[topicSearch, setTopicSearch]}>
      <HeadComponent 
          name={props.user.name} 
          description={props.user.bio}
          title='Projects'>
      </HeadComponent>
      <div className="max-w-7xl mx-auto sm:px-6 md:px-8 pb-4 font-roboto">
        <Hero>{props.user.name}</Hero>
        <Menu items={menuItems}/>
        <div className="mt-11">
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
