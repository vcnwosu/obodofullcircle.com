import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import CustomToggle from "./CustomToggle";

import "../whyChoose.scss"

interface Props {
    list: any[],
    // styleClass: string;
    count: number;
}

const CustomAccordion = ({ list, count }: Props) => {
    const [toggle, setToggle] = useState(Array(count).fill(false));

    const toggleState = (eventKey: number) => {
        const arr = [...toggle];
        arr.forEach((item, index) => {
            if (eventKey === index) {
                arr[index] = !arr[index];
            } else {
                arr[index] = false;
            }
        })
        setToggle(arr);
    }
    return (
        <Accordion>
            {list.map((item, index) => (
                <Card key={index}>
                    <Card.Header>
                        <CustomToggle eventKey={item.eventKey} title={item.title} styleClass={""} onToggle={() => toggleState(+item.eventKey)}>{toggle[index] ? '-' : '+'}</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={item.eventKey}>
                        <Card.Body>{item.text}</Card.Body>
                    </Accordion.Collapse>
                    <hr />
                </Card>
            ))}
        </Accordion>
    )
}

export default CustomAccordion;

