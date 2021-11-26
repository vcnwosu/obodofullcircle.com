import { CustomButton } from "../Button";
import './homeTeaching.scss';
import CustomModal from "../Modal";
import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { nameRegex, emailRegex, numericRegex } from '../../../utils/regex';
import { stateList } from './stateList';
import { countryCodeList } from './countryCodeList';
import { postRequest } from "../../../http/httpService";
import CustomSpinner from "../Spinner";
import { toast } from "react-toastify";

const HomeTeaching = () => {

    const [showModal, setShowModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
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
        countryError: 'Please select a country.',
        stateError: 'Please select a state.',
        countryCodeError: 'Please select a country code.',
        whatsAppContactError: 'Please enter whatsapp contact.',
        emailError: 'Please enter an email.',
        languageError: 'Please enter the language you speak.'
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
                case 'whatsAppContact': if (e.target.validity.valueMissing) {
                    setErrors({ ...errors, whatsAppContactError: 'Please enter whatsapp contact.' })
                } else if (e.target.validity.tooShort) {
                    setErrors({ ...errors, whatsAppContactError: 'Contact number must be between 7 to 15 digits' })
                } else {
                    setErrors({ ...errors, whatsAppContactError: 'Please enter only numbers.' })
                }
                    break;
            }
        }
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }
        setValidated(true);
        setLoading(true);
        const formValue = {
            name: formData.name,
            email: formData.email,
            country: formData.country,
            state: formData.state,
            language: formData.language,
            contact: `${formData.countryCode}${formData.whatsAppContact}`
        }
        postRequest('add-tutor-contact', formValue)
            .then(res => {
                setLoading(false);
                if (res.data.code >= 1000 && res.data.code <= 2000) {
                    toast.error(res.data.message);
                } else {
                    setFormData(initialFormvalue);
                    setErrors(initialErrors);
                    setShowModal(false);
                    setValidated(false);
                    toast.success(res.data.message);
                }
            })
            .catch(err => {
                setLoading(false);
            })
    };

    const modalBody = () => {
        return (
            <div className="form-class">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" maxLength={50} required pattern={nameRegex} value={formData.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                        <Form.Control.Feedback type="invalid" >
                            {errors.nameError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex inputs-group">
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control as="select" required value={formData.country} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}>
                                <option value="" disabled>Select Country</option>
                                <option value="Nigeria">Nigeria</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid" >
                                {errors.countryError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" required value={formData.state} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}>
                                <option value="" disabled>Select State</option>
                                {stateList.map(item => (
                                    <option key={item.state} value={item.state}>{item.state}</option>
                                ))}
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
                    <Form.Group controlId="language">
                        <Form.Label>Language you speak</Form.Label>
                        <Form.Control type="text" required value={formData.language} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                        <Form.Control.Feedback type="invalid" >
                            {errors.languageError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex number-group">
                        <Form.Group controlId="countryCode">
                            <Form.Label>WhatsApp Contact</Form.Label>
                            <FormControl className="country-code" as="select" required value={formData.countryCode} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} >
                                <option value="" disabled>Select Code</option>
                                {countryCodeList.map(item => (
                                    <option key={`${item.code} (${item.country})`} value={item.code}>{`${item.code} (${item.country})`}</option>
                                ))}
                            </FormControl>
                            <Form.Control.Feedback type="invalid" >
                                {errors.countryCodeError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="whatsAppContact">
                            <Form.Label>&nbsp;</Form.Label>
                            <FormControl className="contact-number" type="text" minLength={7} maxLength={15} pattern={numericRegex} required value={formData.whatsAppContact} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                            <Form.Control.Feedback type="invalid" >
                                {errors.whatsAppContactError}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
    return (
        <div className="teaching-div wrapper d-flex justify-content-center align-items-center" id="teaching">
            <div className="text-center">
                <h1 className="head">Ready to Start Teaching?</h1>
                <p className="mb-4">Get started today by completing our assessment and booking your first interview call!</p>
                <CustomButton type="button" text="Become a Teacher" variant="primary" onClick={() => setShowModal(true)} />
            </div>
            <CustomModal show={showModal} handleClose={handleClose} heading="Basic Information" body={modalBody()} />
            <CustomSpinner show={loading} />
        </div>
    )
}

export default HomeTeaching;