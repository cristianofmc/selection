import axios from 'axios'
import configData from '../config.json'

const githubApi = axios.create({
    baseURL: `${configData.GITHUB_API_URL}/${configData.USERNAME}`
})

export default githubApi