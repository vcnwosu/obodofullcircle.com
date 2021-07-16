import { Modal } from "react-bootstrap";
import { CustomButton } from "../Button";

interface Props {
    show: boolean;
    handleClose: () => void;
    buttonText: string;
    heading: string;
    body: JSX.Element;
    onSubmit: (e: any) => void;
}
const CustomModal = ({ show, handleClose, buttonText, heading, body, onSubmit }: Props) => {

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            {/* <Modal.Footer>
                <CustomButton type="submit" text={buttonText} variant="primary" onClick={(e: any) => onSubmit(e)} />
            </Modal.Footer> */}
        </Modal>
    )
}

export default CustomModal;