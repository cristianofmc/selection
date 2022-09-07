import Head from 'next/head';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import configData from '../lib/config.json'
import { getUserDetails, getReposByTopics} from '../lib/github-api';


function About(props){
    return(
        <div className='font-roboto'>
            <Head><title>{props.user.name}-About</title></Head>
            <Hero>{props.user.name}</Hero>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 ">
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </div>
            <section className="mt-16 max-w-7xl mx-auto sm:px-6 md:px-8">
                <div className='grid justify-items-center pt-3'>
                    <div id="about" className="flex mx-4 space-x-4">
                        <img className="w-28 h-28 rounded-full mr-2" src={props.user.avatar_url}></img>
                        <div className="pt-2 max-w-md">
                            {props.user.bio}
                            <div className="mt-3">
                                <a href={`${configData.LINKEDIN_URL}`}  target="_blank" className="mr-4 text-sky-500 hover:text-blue-600">linkedin</a>
                                <a href={`${props.user.html_url}`}  target="_blank" className="mr-4 text-sky-500 hover:text-blue-600">github</a>
                            </div>
                        </div>
                    </div>
                </div>
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

export default About