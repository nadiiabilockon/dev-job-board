import React from 'react';
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001/api/jobs';

export interface JobsInterface {
  title: string;
  company: string;
}

async function fetchJobs(updateCb: { (value: React.SetStateAction<JobsInterface[]>): void }) {
  const res = await fetch(JOB_API_URL);
  let json = await res.json();

  updateCb(json);
}

function App() {
  const [jobList, updateJobs] = React.useState <JobsInterface[]>([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
