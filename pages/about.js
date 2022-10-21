import Hero from '../components/Hero';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import configData from '../lib/config.json'
import {getUserDetails} from "../lib/github-api";
import HeadComponent from '../components/HeadComponent';
import ReactMarkdown from 'react-markdown';
import LinkRenderer from '../components/LinkRender';

function About(props){
    const aboutMd = props.user.bio;
    return(
        <div className='font-roboto'>
            <HeadComponent 
                name={props.user.name} 
                description={props.user.bio}
                title='About'>
            </HeadComponent>
            <Hero>{props.user.name}</Hero>
            <Menu>
                <MenuItem href="">Projects</MenuItem>
                <MenuItem href="about">About</MenuItem>
                <MenuItem href="contact">Contact</MenuItem>
            </Menu>
            <section className="mt-16 max-w-7xl mx-auto sm:px-6 md:px-8">
                <div className='grid justify-items-center pt-3'>
                    <div id="about" className="flex mx-4 space-x-4">
                        <img className="w-28 h-28 rounded-full mr-2" src={props.user.avatar_url} alt="Photo"></img>
                        <div className="pt-2 max-w-md">
                            <ReactMarkdown>
                                {aboutMd}
                            </ReactMarkdown>
                            <div className="mt-3">
                                <LinkRenderer href={`${configData.LINKEDIN_URL}`} className="mr-4">linkedin</LinkRenderer>
                                <LinkRenderer href={`${props.user.html_url}`} className="mr-4">github</LinkRenderer>
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