import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from "@material-ui/core";
import { ModalProps } from './interfaces';

const JobModal: React.FC<ModalProps> = ({ job, open, handleClose }) => {
    if (!job.title) {
        return <div />;
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">
                {job.title} -{job.company}
                <img className={"detail-logo"} src={job.company_logo} />
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="alert-dialog-slide-description"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
                <a href={job.url} target="_blank">
                    <Button color="primary">Apply</Button>
                </a>
            </DialogActions>
        </Dialog>
    );
}

export default JobModal