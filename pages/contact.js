import Head from 'next/head';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import configData from '../lib/config.json'
import { getUserDetails, getReposByTopics} from '../lib/github-api';


function Contact(props){
    return(
        <div className='font-roboto text-hero-black'>
            <Head><title>{props.user.name}-Contact</title></Head>
            <Hero>{props.user.name}</Hero>
            <Menu>
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </Menu>
            <section className="mt-16 max-w-7xl mx-auto sm:px-6 md:px-8">
                <div className='grid justify-items-center pt-3'>
                    <div id="contact" className="flex mx-4 space-x-4">
                        <div className="pt-2 max-w-md">
                            Let me help you <b>innovate</b>, <b>produce better</b>, or have a <b>good conversation</b>! 
                            Please, contact me via <a href={`${configData.LINKEDIN_URL}`} target="_blank" className="text-sky-600 hover:text-blue-700">{'<'} linkedin {'>'}</a>.
                            I will answer you as soon as possible. 😀
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

export default Contact