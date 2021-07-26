import { Modal } from "react-bootstrap";
import './modal.scss';

interface Props {
    show: boolean;
    handleClose: () => void;
    heading: string;
    body: JSX.Element;
}
const CustomModal = ({ show, handleClose, heading, body }: Props) => {

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
        </Modal>
    )
}

export default CustomModal;