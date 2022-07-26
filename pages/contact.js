import Head from 'next/head';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import { getUserDetails, getReposByTopics} from '../lib/github-api';

function Contact(props){
    return(
        <div>
            <Head><title>{props.user.name}-Contact</title></Head>
            <Hero>{props.user.name}</Hero>
            <div class="mt-6 sm:mt-10 flex justify-center space-x-6 ">
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </div>
            <section className="mt-16 max-w-7xl mx-auto sm:px-6 md:px-8">
                <div><p>{props.user.email}</p></div>
            </section>
        </div>
    )
}

export async function getStaticProps(){
    const userDetails = await getUserDetails()

    return {
        props: {
            user:userDetails
        },
        revalidate: 1
    }
}

export default Contact