const fetch = require('node-fetch');
const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {
    let resultCount = 1, onPage = 0;
    const allJobs = [];

    // fetch all pages
    while (resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json()
        allJobs.push(...jobs);
        resultCount = jobs.length;
        onPage++
    }
    console.log('got', allJobs.length, 'jobs total')
    // filter algo for junior jobs
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
        if (
            jobTitle.includes('senior') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')
        ) {
            return false
        }
        return true;
    })
    console.log('filtered down to', jrJobs.length);
    const success = await setAsync('github', JSON.stringify(jrJobs));
    console.log({success})
}
fetchGithub()
module.exports = fetchGithub;