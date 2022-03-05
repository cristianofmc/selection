import Link from 'next/link';
import Hero from '../components/Hero';
import { getUserDetails} from '../lib/github-api';

function Home(props){
    return(
        <div>
            <Hero></Hero>
            <div>{props.userDetails.login}</div>
        </div>
    )
}

export async function getStaticProps(){
    const userDetails = await getUserDetails()

    return {
        props: {
            userDetails
        },
        revalidate: 1
    }
}

export default Home
