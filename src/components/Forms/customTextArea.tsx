import React, { FC } from 'react';
import { Field, ErrorMessage } from 'formik';



interface InputProps {
    label: string;
    name: string;
    type?: string;
    formik?: any;
    isRequired?: boolean,
    placeholder?: string, 
    id?:string
}

const CustomTextArea: FC<InputProps> = ({ label, placeholder, name, type = "text", isRequired, formik,id=name, ...props }) => {

    return (
        <div className={`form-field ${formik?.touched[name] && formik?.errors[name] ? 'error' : ''} space-y-1`}>
            <label htmlFor={name}>{isRequired && <span className="text-red-600">*</span>}{label}</label>
            <div className='flex items-center  relative'>
                <Field as="textarea" rows="3" className='textarea' id={id} name={name} type={type} {...props} placeholder={placeholder} />
            </div>
            <ErrorMessage name={name} component="div" className='text-red-500 mini_sub_text' />
        </div>
    );
};

export default CustomTextArea;
