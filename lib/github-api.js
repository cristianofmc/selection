import axios from 'axios'
import configData from './config.json'


const githubApiToken = process.env.GITHUB_API_TOKEN
const headers = {
    "Authorization": `Token ${githubApiToken}`
}
const githubApi = axios.create({
    baseURL: `${configData.GITHUB_API_URL}/${configData.USERNAME}`,
    headers: headers
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

export function filterReposByTopics(reposData, topics=[]){
    const filtered_repos = reposData.filter(repos => topics.every(itens => {return repos.topics.includes(itens)}));
    return filtered_repos;
}

export default githubApi
