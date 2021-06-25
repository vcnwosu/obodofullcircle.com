import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

interface Props {
    children: string;
    eventKey: string;
    title: string;
    styleClass: string | undefined;
    onToggle: () => void
}

const CustomToggle = ({ children, eventKey, title, styleClass, onToggle}: Props) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        onToggle()
    );

    return (
        <div className="d-flex justify-content-between">
            <h5>{title}</h5>
            <button
                type="button"
                className={styleClass}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        </div>
    );
}

export default CustomToggle;