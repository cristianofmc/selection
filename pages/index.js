import Head from 'next/head';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import Projects from '../components/Projects';
import { getUserDetails, getReposByTopics} from '../lib/github-api';

function Home(props){
    return(
        <div>
            <Head><title>{props.user.name}</title></Head>
            <Hero>{props.user.name}</Hero>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 ">
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </div>
            <section className="mt-16 max-w-7xl mx-auto sm:px-6 md:px-8">
                <Projects>{props.repos}</Projects>
            </section>
        </div>
    )
}

export async function getStaticProps(){
    const userDetails = await getUserDetails()
    const reposDetails = await getReposByTopics([])

    return {
        props: {
            user:userDetails,
            repos:reposDetails
        },
        revalidate: 1
    }
}

export default Home
