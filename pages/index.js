import Link from 'next/link';
import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { getUserDetails, getReposByTopics} from '../lib/github-api';

function Home(props){
    return(
        <div>
            <Head><title>Cristiano Felipe</title></Head>
            <Hero></Hero>
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
