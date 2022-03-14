import React from "react";
import { Breadcrumb } from "antd";
import DynamicForm from "../components/DynamicForm";
import { RegisterFields } from "../fields/fields";

export function Register() {
    

    const onSubmit = data => {
        console.log(data)
    };
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Register</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
            <DynamicForm onSubmit={onSubmit} fields={RegisterFields}/>
        </>
    )
}