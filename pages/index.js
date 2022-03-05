import Link from 'next/link';
import { useEffect } from 'react/cjs/react.production.min';
import Hero from '../components/Hero';
import githubApi from '../services/github';

function Home(props){
    return(
        <div >
            <Hero></Hero>
        </div>
    )
}

export async function getStaticProps(){
    try{
        const response = await githubApi();
        const data = JSON.stringify(response.data);
        
        return {
            props: {
                data: data
            }
        }

    } catch(error){
        console.log(error)
    }
}


export default Home