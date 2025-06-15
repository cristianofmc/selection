import axios from 'axios';
import configData from './config.json';

const { GITHUB_API_URL, USERNAME, KEY_TAG } = configData;
const githubApiToken = process.env.GITHUB_API_TOKEN;

const githubApi = axios.create({
    baseURL: `${GITHUB_API_URL}/${USERNAME}`,
    headers: {
        Authorization: `Bearer ${githubApiToken}`,
        "X-GitHub-Api-Version": "2022-11-28"
    }
});


async function fetchFromGitHub(endpoint = '') {
    try {
        const response = await githubApi(endpoint);
        return response.data;
    } catch (error) {
        console.error('GitHub API Error:', error.message);
        throw error;
    }
    
}


export async function getUserDetails() {
    return await fetchFromGitHub();
}


export async function getReposDetails() {
    return await fetchFromGitHub('repos');
}


export function filterReposByTopics(reposData, topics = []) {
    const requiredTopics = [...topics, KEY_TAG];

    return reposData.filter(repo =>
        requiredTopics.every(topic => repo.topics.includes(topic))
    );
}


export default githubApi;
