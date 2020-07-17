import React from "react";
import { Typography, MobileStepper, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { JobsInterface } from "./App";
import Job from "./Job";

export default function Jobs(props: { jobs: JobsInterface[] }) {
    const [activeStep, setActiveStep] = React.useState<number>(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="jobs">
            <Typography variant="h4" component="h1">
                Entry Level Software Jobs
      </Typography>
            {props.jobs.map((job, index) => (
                <Job key={index} job={job}></Job>
            ))}
            <div>
                {/* Page {activeStep + 1} of {numPages} */}
            </div>
            <MobileStepper
                variant="progress"
                steps={1}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        // disabled={activeStep === numPages - 1}
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
