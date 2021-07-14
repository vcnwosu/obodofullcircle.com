import { useRef } from 'react';
import { useState} from 'react';
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomCarousel from "../../../../shared/components/Carousel";
import Input from "../../../../shared/components/Input";
import { emailRegex } from "../../../../utils/regex";
import './languageSelector.scss';

const LanguageSelector = () => {

    const [email, setEmail] = useState('');
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
            inputRef.current.value = '';
            toast.success('Submitted')
        }
    }

    return (
        <div className="bg-language">
            <div className="wrapper">
                {/* <CustomCarousel /> */}
                <div className="text-center pt-5 pb-5">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <Form noValidate>
                    <Form.Group controlId="email">
                        <Form.Control ref={inputRef} type="text" required pattern={emailRegex} value={email} placeholder="Enter your email address" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)} />
                    <button type="button" className="btn-attached" onClick={(e: any) => submitForm(e)}>Send</button>
                    </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LanguageSelector;