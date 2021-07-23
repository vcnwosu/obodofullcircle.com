import { useRef } from 'react';
import { useState} from 'react';
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { postRequest } from '../../../../http/httpService';
import CustomCarousel from "../../../../shared/components/Carousel";
import CustomSpinner from '../../../../shared/components/Spinner';
import { emailRegex } from "../../../../utils/regex";
import './languageSelector.scss';

const LanguageSelector = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<any>();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const submitForm = (event: any) => {
        if(inputRef.current.validity.valueMissing) {
            toast.error('Please enter an email');
            return;
        } else if (inputRef.current.validity.patternMismatch) {
            toast.error('Please enter a valid email');
            return;
        } else {
            setLoading(true);
            const formValue = {
                email
            };
            postRequest('add-tutor-interest', formValue)
            .then(res => {
                setLoading(false);
                if(res.data.code >= 1000 && res.data.code <= 2000) {
                    toast.error(res.data.message);
                } else {
                    inputRef.current.value = '';
                    toast.success(res.data.message);
                }
            })
            .catch(err => {
                setLoading(false);
            })
        }
    }

    return (
        <div className="bg-language">
            <div className="wrapper">
                {/* <CustomCarousel /> */}
                <div className="text-center pt-5 pb-5">
                    <h2>You caught us while we are getting ready to launch!</h2>
                    <Form noValidate>
                    <Form.Group controlId="email">
                        <Form.Control ref={inputRef} type="text" required pattern={emailRegex} value={email} placeholder="Enter your email address to get notified" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                    <button type="button" className="btn-attached" onClick={(e: any) => submitForm(e)}>Send</button>
                    </Form.Group>
                    </Form>
                </div>
            </div>
            <CustomSpinner show={loading}/>
        </div>
    )
}

export default LanguageSelector;