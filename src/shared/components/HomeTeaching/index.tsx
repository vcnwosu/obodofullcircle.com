import { CustomButton } from "../Button";
import './homeTeaching.scss';
import CustomModal from "../Modal";
import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { nameRegex, emailRegex, numericRegex} from '../../../utils/regex';

const HomeTeaching = () => {

    const [showModal, setShowModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const initialFormvalue = {
        name: '',
        country: '',
        state: '',
        countryCode: '',
        whatsAppContact: '',
        email: '',
        language: ''
    }
    const [formData, setFormData] = useState<any>(initialFormvalue);

    const initialErrors = {
        nameError: 'Please enter a name.',
        countryError: 'Please select country.',
        stateError: 'Please select state.',
        countryCodeError: 'Please enter country code and whatsapp contact.',
        whatsAppContactError: 'Please enter whatsapp contact.',
        emailError: 'Please enter an email.',
        languageError: 'Please select a language.'
    }

    const [errors, setErrors] = useState(initialErrors);
    const handleClose = () => {
        setShowModal(false);
        setFormData(initialFormvalue);
        setValidated(false);
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formData[e.target.id] = e.target.value;
        setFormData({ ...formData });
        if (!e.target.checkValidity()) {
            switch (e.target.id) {
                case 'name': if (e.target.validity.valueMissing) {
                    setErrors({ ...errors, nameError: 'Please enter a name.' })
                } else {
                    setErrors({ ...errors, nameError: 'Please enter only characters.' })
                }
                    break;
                case 'email': if (e.target.validity.valueMissing) {
                    setErrors({ ...errors, emailError: 'Please enter an email.' })
                } else {
                    setErrors({ ...errors, emailError: 'Please enter a valid email.' })
                }
                break;
                case 'countryCode': if (e.target.validity.valueMissing) {
                    setErrors({ ...errors, countryCodeError: 'Please enter country code and whatsapp contact.' })
                } else {
                    setErrors({ ...errors, countryCodeError: 'Please enter only numbers.' })
                }
                break;
                case 'whatsAppContact': if (e.target.validity.valueMissing) {
                    setErrors({ ...errors, whatsAppContactError: 'Please enter whatsapp contact.' })
                } else {
                    setErrors({ ...errors, whatsAppContactError: 'Please enter only numbers.' })
                }
                break;
            }
        }
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
                        <Form.Control type="text" required pattern={nameRegex} value={formData.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                        <Form.Control.Feedback type="invalid" >
                            {errors.nameError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex inputs-group">
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control as="select" required value={formData.country} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}>
                                <option value="" disabled>Select Country</option>
                                <option value="1">Delhi</option>
                                <option value="2">Noida</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid" >
                                {errors.countryError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select"  required value={formData.state} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}>
                                <option value="" disabled>Select State</option>
                                <option value="1">Delhi</option>
                                <option value="2">Noida</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid" >
                                {errors.stateError}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" pattern={emailRegex} required value={formData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                        <Form.Control.Feedback type="invalid">
                            {errors.emailError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex inputs-group">
                        <Form.Group controlId="language">
                            <Form.Label>Language you speak</Form.Label>
                            <Form.Control type="text" required value={formData.language} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                            <Form.Control.Feedback type="invalid" >
                                {errors.languageError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>WhatsApp Contact</Form.Label>
                            <InputGroup className="mb-3">
                                <FormControl type="text" pattern={numericRegex} required id="countryCode" value={formData.countryCode} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                                <FormControl className="contact-number" type="text" pattern={numericRegex} required id="whatsAppContact" value={formData.whatsAppContact} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                            <Form.Control.Feedback type="invalid" >
                                {errors.countryCodeError}
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </div>
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
            </div>
            <CustomModal show={showModal} handleClose={handleClose} buttonText="Submit" heading="Basic Information" body={modalBody()} onSubmit={(e: any) => handleSubmit(e)} />
        </div>
    )
}

export default HomeTeaching;