import { CustomButton } from "../Button";
import './homeTeaching.scss';
import CustomModal from "../Modal";
import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const HomeTeaching = () => {

    const [showModal, setShowModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const initialFormvalue = {
        name: '',
        location: '1',
        countryCode: '',
        whatsAppContact: '',
        email: '',
        ethnicity: '1'
    }

    const [formData, setFormData] = useState<any>(initialFormvalue);

    const handleClose = () => {
        setShowModal(false);
        setFormData(initialFormvalue);
        setValidated(false);
    }
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        formData[e.target.id] = e.target.value;
        setFormData({...formData});
    }
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
      };

    const modalBody = () => {
        return (
            <div className="form-class">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required value={formData.name} onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}/>
                    </Form.Group>
                    <div className="d-flex inputs-group">
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control as="select" required value={formData.location} onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}>
                            <option value="1">Delhi</option>
                            <option value="2">Noida</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>WhatsApp Contact</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl required id="countryCode" value={formData.countryCode} onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                            <FormControl required id="whatsAppContact" value={formData.whatsAppContact} onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                        </InputGroup>
                    </Form.Group>
                    </div>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" required  value={formData.email} onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}/>
                    </Form.Group>
                    <Form.Group controlId="ethnicity">
                        <Form.Label>Ethnicity</Form.Label>
                        <Form.Control as="select" required value={formData.ethnicity} onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}>
                            <option value="1">Value 1</option>
                            <option value="2">Value 2</option>
                        </Form.Control>
                    </Form.Group>
                    {/* <Button variant="primary" type="submit">
                        Submit
                    </Button> */}
                </Form>
            </div>
        )
    }
    return (
        <div className="teaching-div wrapper d-flex justify-content-center align-items-center" id="teaching">
            <div className="text-center">
                <h1 className="head">Ready to Start Teaching?</h1>
                <p className="mb-4">Get started today by completing our assessment and booking your first interview call!</p>
                <CustomButton type="button" text="Contact us" variant="primary" onClick={() => setShowModal(true)} />
                <CustomModal show={showModal} handleClose={handleClose} buttonText="Submit" heading="Basic Information" body={modalBody()} onSubmit={(e: any) => handleSubmit(e)} />
            </div>
        </div>
    )
}

export default HomeTeaching;