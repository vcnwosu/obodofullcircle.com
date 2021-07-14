import { Spinner } from "react-bootstrap";
import './spinner.scss';

interface Props {
    show: boolean;
}
const CustomSpinner = ({ show }: Props) => {

    return (
        <div className="spinner-div" style={show ? {display: 'block'} : {display: 'none'}}>
        <Spinner animation="border" role="status" variant="success">
            <span className="sr-only">Loading...</span>
        </Spinner>
        </div>
    )
}

export default CustomSpinner;