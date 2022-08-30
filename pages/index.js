import Head from 'next/head';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import Projects from '../components/Projects';
import SearchInput from '../components/SearchInput';
import configData from '../lib/config.json'
import { getUserDetails, getReposDetails,  filterReposByTopics} from '../lib/github-api';
import { useState } from 'react';

function Home(props){
    const [tagSearch, setTagSearch] = useState([configData.KEY_TAG]);

    const getTagsFromInput = (fullString) => {
        let tags = fullString.split(';').slice(0, -1).map(x => x.trim());
        tags.push(configData.KEY_TAG);
        return tags;
    };

    const filteredRepos = tagSearch.length > 0
    ? filterReposByTopics(props.repos, tagSearch) : [];

    return(
        <div className='max-w-7xl mx-auto sm:px-6 md:px-8 mb-4'>
            <Head><title>{props.user.name}</title></Head>
            <Hero>{props.user.name}</Hero>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 ">
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </div>
            <div className='mt-10'>
                <SearchInput onChange={e => setTagSearch(getTagsFromInput(e.target.value))}/>
            </div>
            <section className="mt-4">
                <Projects>{filteredRepos}</Projects>
            </section>
        </div>
    )
}

export async function getStaticProps(){
    const userDetails = await getUserDetails();
    const reposDetails = await getReposDetails();

    return {
        props: {
            user:userDetails,
            repos:reposDetails
        },
        revalidate: 1
    }
}

export default Home
