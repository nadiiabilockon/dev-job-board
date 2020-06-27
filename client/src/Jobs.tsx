import React from "react";
import { Typography } from "@material-ui/core";
import { JobsInterface } from "./App"
import Job from './Job';

export default function Jobs(props: { jobs: JobsInterface[] }) {
    return (
        <div className="jobs">
            <Typography variant="h4"> Entry Level Software Jobs</Typography>
            {props.jobs.map((job, index) => <Job key={index} job={job}></Job>)}
        </div>
    );
}
