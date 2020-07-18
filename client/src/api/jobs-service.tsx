import { JobInterface } from '../interfaces';

const JOB_API_URL = 'http://localhost:3001/api/jobs';

export async function fetchJobs(updateJobs: { (value: React.SetStateAction<JobInterface[]>): void }) {
    const res = await fetch(JOB_API_URL);
    const json = await res.json();

    updateJobs(json);
}