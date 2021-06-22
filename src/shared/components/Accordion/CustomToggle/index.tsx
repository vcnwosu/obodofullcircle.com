import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

interface Props {
    children: string;
    eventKey: string;
    title: string;
    onToggle: () => void
}

const CustomToggle = ({ children, eventKey, title, onToggle}: Props) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        onToggle()
    );

    return (
        <div className="d-flex justify-content-between">
            <h5>{title}</h5>
            <button
                type="button"
                className="btn-toggle"
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        </div>
    );
}

export default CustomToggle;