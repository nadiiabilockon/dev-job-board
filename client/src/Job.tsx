import React from 'react'
import { JobsInterface } from "./App"

export default function Job(props: { job: JobsInterface }) {
    return (
        <div className="job">
            {props.job.title}
            {props.job.company}
        </div>
    )
}
