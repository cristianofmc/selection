
import HeadComponent from '../components/HeadComponent';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import configData from '../lib/config.json'
import { getUserDetails, getReposByTopics} from '../lib/github-api';


function Contact(props){
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
                            Let me help you <b>innovate</b>, <b>produce better</b>, or have a <b>good conversation</b>! 
                            Please, contact me via 
                            <a href={`${configData.LINKEDIN_URL}`} target="_blank" className="text-sky-700 hover:text-blue-800 dark:text-sky-500 dark:hover:text-sky-400">
                                {' <'}<span className='px-0.5'>linkedin</span>{'>'}
                            </a>.
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