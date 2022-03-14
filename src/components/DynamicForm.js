import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Select, Row, Col, Radio } from 'antd';
import CustomButton from "./CustomButton";



const DynamicForm = ({ fields, onSubmit }) => {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            // firstName: '',
            // select: {}
        }
    });
    
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <>
            {fields && fields.length !== 0 ? (
                <div className={fields.length / 4 <= 1 ? "flex justify-center" : ""}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <Row gutter={[16, 16]}>
                                {
                                    fields.map((f, i) => (
                                        <Col
                                            span={fields.length / 4 <= 1 ? 24 : fields.length / 4 <= 2 ? 12 : fields.length / 4 <= 3 ? 8 : 6}
                                            key={f.name + i}>
                                            <Controller
                                                key={f.name + i}
                                                name={f.name}
                                                control={control}
                                                render={({ field }) => {
                                                    switch (f.type) {

                                                        case "input":
                                                        case "email":
                                                        case "password":
                                                            return (
                                                                <>
                                                                    {f.required ? <span className="text-red-500">*</span> : null}
                                                                    <label>{f.label}</label>
                                                                    <Input {...register(f.name, { required: f.required })} {...field} type={f.type} />
                                                                    <div className="text-red-500">
                                                                        {errors[f.name] && <span>To'ldirish shart</span>}
                                                                    </div>
                                                                </>
                                                            )

                                                        case "select":
                                                            return (
                                                                <>
                                                                    {f.required ? <span className="text-red-500">*</span> : null}
                                                                    <label>{f.label}</label>
                                                                    <Select
                                                                        className="w-full"
                                                                        {...register(f.name, { required: f.required })}
                                                                        {...field}
                                                                        options={f.options.map((option, i) => (
                                                                            { ...option }
                                                                        ))}
                                                                    />
                                                                    <div className="text-red-500">{errors[f.name] && <span>To'ldirish shart</span>}</div>
                                                                </>
                                                            )
                                                        case "radio":
                                                            return (
                                                                <>
                                                                    {f.required ? <span className="text-red-500">*</span> : null}
                                                                    <label>{f.label}</label><br />
                                                                    <Radio.Group onChange={onChange} value={value}
                                                                        {...register(f.name, { required: f.required })} {...field}>
                                                                        {
                                                                            f.options.map((option, i) => (
                                                                                <Radio.Button
                                                                                    key={option.label + i}
                                                                                    value={option.value}>
                                                                                    {option.label}
                                                                                </Radio.Button>
                                                                            ))
                                                                        }
                                                                    </Radio.Group>
                                                                    <div className="text-red-500">{errors[f.name] && <span>To'ldirish shart</span>}</div>
                                                                </>
                                                            )
                                                        default:
                                                            return null
                                                    }
                                                }
                                                }
                                            />
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                        <div className="flex justify-center mt-2">
                            <div>
                                <CustomButton className="glow-on-hover w-full" type="submit" text="Submit" />
                            </div>
                        </div>
                    </form >
                </div>
            )
                : null}
        </>
    );
};
export default DynamicForm;