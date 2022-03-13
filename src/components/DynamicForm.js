import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Select, Row, Col } from 'antd';
import CustomButton from "./CustomButton";

const fields = [
    {
        name: "firstName",
        type: "input",
        label: "Ism",
        required: true,
    },
    {
        name: "Select",
        type: "select",
        label: "Tanlang",
        required: true,
        options: [
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
        ]
    },
]

const DynamicForm = () => {
    const { register,control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            firstName: 'asdasd',
            select: {}
        }
    });
    const onSubmit = data => {
        console.log(data)
    };

    return (
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
                                                    return (
                                                        <>
                                                            <label>{f.label}</label>
                                                            <Input {...field} />
                                                        </>
                                                    )


                                                case "select":
                                                    return (
                                                        <>
                                                            <label>{f.label}</label>
                                                            <Select
                                                                className="w-full"
                                                                {...field}
                                                                options={f.options.map((option, i) => (
                                                                    { ...option }
                                                                ))}
                                                            />
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
    );
};
export default DynamicForm;