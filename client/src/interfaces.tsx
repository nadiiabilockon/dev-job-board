export interface JobInterface {
    title: string;
    company: string;
    location: string;
    created_at: string;
    company_logo: string;
    description: string;
    url: string;
}

export interface JobProps {
    job: JobInterface;
    selectJob: (job: JobInterface) => void;
    handleClickOpen: () => void
}

export interface ModalProps {
    job: JobInterface;
    open: boolean;
    handleClose: () => void
}