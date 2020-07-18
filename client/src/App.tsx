import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import Jobs from './Jobs';
import { JobInterface } from './interfaces';
import {fetchJobs} from './api/jobs-service'

const App = () => {
  const [jobList, updateJobs] = React.useState<JobInterface[]>([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <Container fixed>
      <Jobs jobs={jobList} />
    </Container>
  );
}

export default App;
