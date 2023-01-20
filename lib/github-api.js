import axios from 'axios'
import configData from './config.json'

<<<<<<< HEAD
const keyTag = configData.KEY_TAG;

const githubApiToken = process.env.GITHUB_API_TOKEN
const headers = {
    "Authorization": `Token ${githubApiToken}`
}
=======
>>>>>>> 6440abe88db2baa127613857e6bdc16677805c7d
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

<<<<<<< HEAD
export function filterReposByTopics(reposData, topics=[]){
    var newArray = topics.slice();
    if (!topics.includes(keyTag)) newArray.push(keyTag);

    const filtered_repos = reposData.filter(repos => newArray.every(itens => {return repos.topics.includes(itens)}));
    return filtered_repos;
=======
export async function getReposByTopics(topics=["selections", "..."]){
    const reposDetails = await getReposDetails()
    
    const filtered_repos = reposDetails.filter(repos => topics.every(itens => {return repos.topics.includes(itens)}));
    return filtered_repos
>>>>>>> 6440abe88db2baa127613857e6bdc16677805c7d
}

export default githubApi
