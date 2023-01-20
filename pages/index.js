<<<<<<< HEAD
import { getUserDetails, getReposDetails, filterReposByTopics,} from "../lib/github-api";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import Projects from "../components/Projects";
import TopicSearch from "../components/TopicSearch";
import { useState } from "react";
import TopicContext from "../lib/topicContext";
import HeadComponent from "../components/HeadComponent";

function Home(props) {
  const [topicSearch, setTopicSearch] = useState([]);

  const filteredRepos = filterReposByTopics(props.repos, topicSearch);

  return (
    <TopicContext.Provider value={[topicSearch, setTopicSearch]}>
      <HeadComponent 
          name={props.user.name} 
          description={props.user.bio}
          title='Projects'>
      </HeadComponent>
      <div className="max-w-7xl mx-auto sm:px-6 md:px-8 pb-4 font-roboto">
        <Hero>{props.user.name}</Hero>
        <Menu>
          <MenuItem href="">Projects</MenuItem>
          <MenuItem href="about">About</MenuItem>
          <MenuItem href="contact">Contact</MenuItem>
        </Menu>
        <div className="mt-11">
          <TopicSearch/>
=======
import Link from 'next/link';
import Head from 'next/head';
import Hero from '../components/Hero';
import { getUserDetails, getReposByTopics} from '../lib/github-api';

function Home(props){
    return(
        <div>
            <Head><title>Cristiano Felipe</title></Head>
            <Hero></Hero>
            <div>
                {props.repos.map((data) => {
                    return <p className='text-center'>{data.name}</p>
                })}
            </div>
>>>>>>> 6440abe88db2baa127613857e6bdc16677805c7d
        </div>
        <section className="mt-4">
          <Projects>{filteredRepos}</Projects>
        </section>
      </div>
    </TopicContext.Provider>
  );
}

<<<<<<< HEAD
export async function getStaticProps() {
  const userDetails = await getUserDetails();
  const reposDetails = await getReposDetails();
=======
export async function getStaticProps(){
    const userDetails = await getUserDetails()
    const reposDetails = await getReposByTopics()
>>>>>>> 6440abe88db2baa127613857e6bdc16677805c7d

  return {
    props: {
      user: userDetails,
      repos: reposDetails,
    },
    revalidate: 1,
  };
}

export default Home;
