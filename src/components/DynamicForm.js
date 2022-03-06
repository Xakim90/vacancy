import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Select, Button } from 'antd';
import CustomButton from "./CustomButton";

const DynamicForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            select: {}
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
            <Controller
                name="select"
                control={control}
                render={({ field }) => <Select
                    {...field}
                    options={[
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" }
                    ]}
                />}
            />
            <CustomButton type="submit" text="Submit" />
        </form>
    );
};
export default DynamicForm;