import Head from 'next/head';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import Projects from '../components/Projects';
import SearchInput from '../components/SearchInput';
import configData from '../lib/config.json'
import { getUserDetails, getReposByTopics} from '../lib/github-api';

function Home(props){
    return(
        <div className='max-w-7xl mx-auto sm:px-6 md:px-8'>
            <Head><title>{props.user.name}</title></Head>
            <Hero>{props.user.name}</Hero>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 ">
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </div>
            <div className='mt-10'>
                <SearchInput/>
            </div>
            <section className="mt-4">
                <Projects>{props.repos}</Projects>
            </section>
        </div>
    )
}

export async function getStaticProps(){
    const userDetails = await getUserDetails()
    const reposDetails = await getReposByTopics([configData.KEY_TAG])

    return {
        props: {
            user:userDetails,
            repos:reposDetails
        },
        revalidate: 1
    }
}

export default Home
