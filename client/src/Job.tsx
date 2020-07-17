import React from 'react'
import { JobsInterface } from "./App"
import { Typography, Card } from '@material-ui/core'

export default function Job(props: { job: JobsInterface }) {
    return (
        <Card className="job">
            <div className="flex-align-mid">
                <div className="job-title-location">
                    <Typography variant="h6">{props.job.title}</Typography>
                    <Typography variant="h5">{props.job.company}</Typography>
                    <Typography>{props.job.location}</Typography>
                </div>
            </div>
            <div className="flex-align-mid">
                <Typography>{props.job.created_at.split(' ').slice(0, 4).join(' ')}</Typography>
            </div>
        </Card>
    )
}
