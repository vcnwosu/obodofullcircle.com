import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import "../whyChoose.scss"

interface Props {
    children: string;
    eventKey: string;
    title: string;
    styleClass: string | undefined;
    onToggle: () => void
}

const CustomToggle = ({ children, eventKey, title, onToggle }: Props) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        onToggle()
    );

    return (
        <div className="card-button">
            <h5>{title}</h5>
            <button
                type="button"
                // className="card-button"
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        </div>
    );
}

export default CustomToggle;