import React, { FC } from 'react';
import { Field, ErrorMessage,  useFormikContext } from 'formik';
import PhoneInput from 'react-phone-input-2';
import Iconify from '../elements/icon';

interface InputProps {
    label: string;
    name: string;
    type?: string;
    formik?: any;
    isRequired?: boolean,
    handleShowPassword?: () => void;
    handleOnChange?: (value: string | number) => void;
    handleOnBlur?: (value: string | number) => void;
    placeholder?: string;
    max?: number,
    min?: number,
    value?: string,
    id?:string
}

const CustomInput: FC<InputProps> = ({ label, handleOnChange, handleOnBlur, placeholder, name, type = "text", isRequired, formik, handleShowPassword, max, min, value, id , ...props }) => {

    const { setFieldValue } = useFormikContext();

    switch (type) {
        case "tel":
            return (
                <div className='space-y-1'>
                    <label htmlFor={name}> {isRequired && <span className="text-red-600">*</span>} {label}</label>
                    <Field id={name} name={name} {...props}>
                        {({ field }: any) => {
                            return (
                                <PhoneInput
                                    country="ng"
                                    placeholder={label}
                                    inputStyle={{ height: '40px', width: '100%', fontFamily: "poppins" }}
                                    value={field.value}
                                    onChange={(value) => {
                                    setFieldValue(name, value);
                                    }}
                                    onBlur={field.onBlur}
                                />
                            );
                        }}
                    </Field>
                    <ErrorMessage name={name} component="div" className='text-red-500 mini_sub_text' />
                </div>
            );

        case "file":
            return (
                <div className="space-y-1">
                    <label htmlFor={name}>{isRequired && <span className="text-red-600">*</span>}{label}</label>
                    <div>
                        <input
                            type="file"
                            className="input"
                            onChange={(e) =>
                                e.target.files && formik.setFieldValue(name, e.target.files[0])
                            }
                            accept="*"
                        />
                    </div>
                    <ErrorMessage name={name} component="div" className='text-red-500 mini_sub_text' />
                </div>
            )

        default:
            return (
                <div className={`form-field ${formik?.touched[name] && formik?.errors[name] ? 'error' : ''} space-y-1`}>
                    <label htmlFor={name}>{isRequired && <span className="text-red-600">*</span>}{label}</label>
                    <div className='flex items-center  relative ' >

                        <Field name={name} id={id} maxLength={max} {...props}>
                            {({ field }: any) => (
                                <input
                                    type={type}
                                    className='input border-2 focus:outline-formBlue rounded-md p-4 w-full  border-slate-200'
                                    value={field.value}
                                    placeholder={placeholder}
                                    onChange={(e) => {
                                        setFieldValue(name, e.target.value);
                                        if (handleOnChange) {
                                            handleOnChange(e.target.value);
                                        }
                                    }}
                                    maxLength={max}
                                    max={max}
                                    min={min}
                                    id={id}
                                    onBlur={(e) => {
                                        if (handleOnBlur) {
                                            handleOnBlur(e.target.value)
                                        }
                                    }}
                                />
                            )}
                        </Field>


                        {
                            handleShowPassword && (
                                <span className='absolute right-3 mt-1'>
                                    <button
                                        type='button'
                                        onClick={handleShowPassword}
                                        title={type === 'text' ? 'Hide password' : 'Show password'}
                                    >
                                        {
                                            type === "password" ? (
                                                <Iconify icon='basil:eye-closed-outline' className='text-2xl text-mute' />
                                            ) : (
                                                <Iconify icon='simple-line-icons:eye' className='text-2xl text-mute' />
                                            )
                                        }
                                    </button>
                                </span>
                            )
                        }


                    </div>
                    <ErrorMessage name={name} component="div" className='text-red-500 mini_sub_text' />
                </div>
            )
    }
};

export default CustomInput;
