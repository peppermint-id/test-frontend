import './styles.css'
import type {FC} from "react";

interface FormInputProps {
    field: string;
    label: string;
    required?: boolean;
    placeholder?: string;
}

export const FormInput: FC<FormInputProps> = ({field, label, required, placeholder}) => {
    return (
        <div className={`form-input-container`}>
            <label htmlFor={field} className={'text__body--14-medium'}>{label}:{required && '*'}</label>
            <input className={'input input--primary text__body--16'} id={field} placeholder={placeholder}/>
        </div>
    )
}