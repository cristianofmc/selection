import axios from 'axios'
import configData from '../config.json'

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


export default githubApi


