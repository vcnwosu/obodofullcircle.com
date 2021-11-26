import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from 'react';
import { postRequest } from "../../http/httpService";
import { toast } from "react-toastify";
import { nameRegex, emailRegex, numericRegex } from '../../utils/regex';
import { countryCodeList } from '../../shared/components/HomeTeaching/countryCodeList';
import './support.scss';
import CustomSpinner from "../../shared/components/Spinner";
import { useHistory } from "react-router-dom";
import { websiteURL } from "../../http/httpInterceptor";

const Support = () => {
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const initialFormvalue = {
        name: '',
        countryCode: '',
        contact: '',
        email: '',
        description: ''
    }
    const [formData, setFormData] = useState<any>(initialFormvalue);

    const initialErrors = {
        nameError: 'Please enter a name.',
        countryCodeError: 'Please select a country code.',
        contactError: 'Please enter contact.',
        emailError: 'Please enter an email.',
        descriptionError: 'Please enter description.'
    }

    const [errors, setErrors] = useState(initialErrors);
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
                case 'contact': if (e.target.validity.valueMissing) {
                    setErrors({ ...errors, contactError: 'Please enter contact.' })
                } else if (e.target.validity.tooShort) {
                    setErrors({ ...errors, contactError: 'Contact number must be between 7 to 15 digits' })
                } else {
                    setErrors({ ...errors, contactError: 'Please enter only numbers.' })
                }
                    break;
                case 'description': if (e.target.validity.valueMissing) {
                    setErrors({ ...errors, descriptionError: 'Please enter description.' })
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
            contact: `${formData.countryCode}${formData.contact}`,
            description: formData.description
        }
        postRequest('contact-support', formValue)
            .then(res => {
                setLoading(false);
                if (res.data.code >= 1000 && res.data.code <= 2000) {
                    toast.error(res.data.message);
                } else {
                    setFormData(initialFormvalue);
                    setErrors(initialErrors);
                    setValidated(false);
                    toast.success('Contact us requested submitted successfully');
                    setTimeout(() => {
                        window.open(websiteURL, '_self');
                    }, 1000)
                }
            })
            .catch(err => {
                setLoading(false);
            })
    };
    return (
        <div className="my-5 support-div">
            <h2 className="text-center">Contact Us</h2>
            <p className="text-center">Please fill in details, we will get back to you shortly.</p>
            <div className="form-support form-class d-flex justify-content-center mt-4">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" maxLength={50} required pattern={nameRegex} value={formData.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                        <Form.Control.Feedback type="invalid" >
                            {errors.nameError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" pattern={emailRegex} required value={formData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                        <Form.Control.Feedback type="invalid">
                            {errors.emailError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex number-group">
                        <Form.Group controlId="countryCode">
                            <Form.Label>Phone Number</Form.Label>
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
                        <Form.Group controlId="contact">
                            <Form.Label>&nbsp;</Form.Label>
                            <FormControl className="contact-number" type="text" minLength={7} maxLength={15} pattern={numericRegex} required value={formData.contact} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                            <Form.Control.Feedback type="invalid" >
                                {errors.contactError}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <FormControl as="textarea" rows={3} value={formData.description} required onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                        <Form.Control.Feedback type="invalid" >
                            {errors.descriptionError}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="text-right">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
            <CustomSpinner show={loading} />
        </div>
    )
}

export default Support;