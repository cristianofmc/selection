import axios from 'axios'
import configData from './config.json'

const githubApi = axios.create({
    baseURL: `${configData.GITHUB_API_URL}/${configData.USERNAME}`
})

export async function getUserDetails(){
    try{
        const response = await githubApi();
        return  response.data;
    }catch(error){
        console.log(error)
    }
}

export async function getReposDetails(){
    try{
        const response = await githubApi('repos');
        return  response.data;
    }catch(error){
        console.log(error)
    }
}

export async function getReposByTopics(topics=["selections", "..."]){
    const reposDetails = await getReposDetails()
    
    const filtered_repos = reposDetails.filter(repos => topics.every(itens => {return repos.topics.includes(itens)}));
    return filtered_repos
}

export default githubApi
