import React from "react";
import { Typography, MobileStepper, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { JobInterface } from './interfaces';
import Job from "./Job";
import JobModal from "./JobModal";

const Jobs =  (props: { jobs: JobInterface[] }) => {
    const [activeStep, setActiveStep] = React.useState<number>(0);
    const [open, setOpen] = React.useState<boolean>(false);
    const [selectedJob, selectJob] = React.useState({} as JobInterface);

    const numJobs = props.jobs.length;
    const numPages = Math.ceil(numJobs / 50);
    const jobsOnPage = props.jobs.slice(activeStep * 50, (activeStep * 50) + 50);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="jobs">
            <JobModal open={open} job={selectedJob} handleClose={handleClose} />
            <Typography variant="h4" component="h1">
                Entry Level Software Jobs
            </Typography>
            <Typography variant="h6" component="h2">
                Found {numJobs} Jobs
            </Typography>
            <div>
                {jobsOnPage.map((job, index) => (
                    <Job key={index} job={job} selectJob={selectJob} handleClickOpen={handleClickOpen} />
                ))}
            </div>
            <div>
                Page {activeStep + 1} of {numPages}
            </div>
            <MobileStepper
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === numPages - 1}
                    >
                        Next
                        <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft />
                        Back
                    </Button>
                }
            />
        </div>
    );
}

export default Jobs