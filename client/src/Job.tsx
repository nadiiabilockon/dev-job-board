import React from "react";
import { JobInterface, JobProps } from './interfaces';
import { Typography, Card } from "@material-ui/core";

const Job: React.FC<JobProps> = ({ job, selectJob, handleClickOpen }) => {
    return (
        <Card className="job" onClick={() => { handleClickOpen(); selectJob(job)}}>
            <div className="flex-align-mid">
                <div className="job-title-location">
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="h5">{job.company}</Typography>
                    <Typography>{job.location}</Typography>
                </div>
            </div>
            <div className="flex-align-mid">
                <Typography>
                    {job.created_at.split(" ").slice(0, 4).join(" ")}
                </Typography>
            </div>
        </Card>
    );
}

export default Job