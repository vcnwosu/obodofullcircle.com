import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { AccordionType } from "../../../modules/Home/components/HomeWhyObodo";
import CustomToggle from "./CustomToggle";

interface Props {
    list: AccordionType[],
    styleClass: string;
}

const CustomAccordion = ({ list, styleClass }: Props) => {
    const [toggle, setToggle] = useState([false, false, false, false]);

    const toggleState = (eventKey: number) => {
        const arr = [...toggle];
        arr.forEach((item, index) => {
            if(eventKey === index) {
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
                        <CustomToggle eventKey={item.eventKey} title={item.title} styleClass={styleClass} onToggle={() => toggleState(+item.eventKey) }>{toggle[index] ? '-' : '+'}</CustomToggle>
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