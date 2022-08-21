import Head from 'next/head';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import { getUserDetails, getReposByTopics} from '../lib/github-api';

function Contact(props){
    return(
        <div>
            <Head><title>{props.user.name}-Contact</title></Head>
            <Hero>{props.user.name}</Hero>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 ">
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </div>
            <section className="mt-16 max-w-7xl mx-auto sm:px-6 md:px-8">
                <div className='grid justify-items-center pt-3'>
                    <div id="contact" className="flex mx-4 space-x-4">
                        <div className="pt-2 max-w-md">
                            Let me help you <b>innovate</b>, <b>produce better</b>, or have a <b>good conversation</b>! 
                            Please, contact me via <a href={`${process.env.linkedin_url}`} target="_blank" className="text-sky-500 hover:text-blue-600">{'<'} linkedin {'>'}</a>.
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