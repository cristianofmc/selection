import Head from 'next/head';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import { getUserDetails, getReposByTopics} from '../lib/github-api';


function About(props){
    return(
        <div>
            <Head><title>{props.user.name}-About</title></Head>
            <Hero>{props.user.name}</Hero>
            <div class="mt-6 sm:mt-10 flex justify-center space-x-6 ">
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </div>
            <section className="mt-16 max-w-7xl mx-auto sm:px-6 md:px-8">
                <div id="about" className="pt-3">
                    <img className="rounded-full" src={props.user.avatar_url}></img>
                    <p>{props.user.bio}</p></div>
            </section>
        </div>
    )
}

export async function getStaticProps(){
    const userDetails = await getUserDetails()
     console.log(userDetails)
    return {
        props: {
            user:userDetails
        },
        revalidate: 1
    }
}

export default About