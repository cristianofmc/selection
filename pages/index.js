import Link from 'next/link';
import Hero from '../components/Hero';
import { getUserDetails, getReposByTopics} from '../lib/github-api';

function Home(props){
    return(
        <div>
            <Hero></Hero>
            <div>
                {props.repos.map((data) => {
                    return <p className='text-center'>{data.name}</p>
                })}
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const userDetails = await getUserDetails()
    const reposDetails = await getReposByTopics()

    return {
        props: {
            user:userDetails,
            repos:reposDetails
        },
        revalidate: 1
    }
}

export default Home
