import './input.scss';

interface Props {
    type: string;
    placeholder: string;
}

const Input = ({type, placeholder}: Props) => {
    return (
        <>
            <input className="custom-input" type={type} placeholder={placeholder} />
        </>
    )
}

export default Input;