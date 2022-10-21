
import HeadComponent from '../components/HeadComponent';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import { getUserDetails} from '../lib/github-api';
import ReactMarkdown from 'react-markdown';
import configData from '../lib/config.json';
import LinkRenderer from '../components/LinkRender';

function Contact(props){

    const contactMd = `Let me help you **innovate**, **produce better**, or have a **good conversation**! 
    Please, contact me via [linkedin](${configData.LINKEDIN_URL}). 
    I will answer you as soon as possible. 😀`

    return(
        <div className='font-roboto'>
            <HeadComponent 
                name={props.user.name} 
                description={props.user.bio}
                title='Contact'>
            </HeadComponent>
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
                        <ReactMarkdown components={{ a: LinkRenderer }}>
                            {contactMd}
                        </ReactMarkdown>
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