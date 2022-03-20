import React, { useState } from "react";
import { Breadcrumb, Button } from "antd";
import DynamicForm from "../components/DynamicForm";
import { RegisterFields } from "../fields/fields";
import AntAlert from "../components/AntAlert";
import { useDispatch } from "react-redux";
import { authAPI } from "../actions/auth";

export function Register() {
    const [alert, setAlert] = useState(false);
    const [lessPassword, setLessPassword] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();

    const onSubmit = data => {
        if (data.password === data.accept) {
            if (data.password.length >= 4) {
                dispatch(authAPI.createUser({
                    name: data.name,
                    email: data.email,
                    password: data.password
                }))

            } else {
                setLessPassword(true);
            }

        } else {
            setAlert(true)
        }
    };
    const change = (e) => {
        if (e.password && e.password !== ""
            && e.email && e.email !== ""
            && e.name && e.name !== ""
            && e.accept && e.accept !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }
    const func = (e) => {
        alert ? setAlert(false) : setLessPassword(false);
    }
    return (
        <>
            {
                alert || lessPassword ?
                    <AntAlert
                        onClick={func}
                        type={"error"}
                        message={"Xato"}
                        description={alert ? "parollar bir xil bo'lishi shart" : lessPassword ? "parol uzunligi 4 dan kam bo'lmasligi kerak" : ""}
                        showIcon={true}
                        action={
                            <Button size="small" danger>
                                Tushunarli
                            </Button>
                        }
                        closable
                    /> : null
            }
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

            <DynamicForm change={change} disabled={disabled} onSubmit={onSubmit} fields={RegisterFields} />
        </>
    )
}