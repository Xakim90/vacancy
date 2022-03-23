import React, { useState } from "react";
import { Button } from "antd";
import DynamicForm from "../components/DynamicForm";
import { RegisterFields } from "../fields/fields";
import AntAlert from "../components/AntAlert";
import { instance } from "../api";

export function Register(props) {
    console.log(props)
    const [alert, setAlert] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const onSubmit = data => {
        if (data.password === data.accept) {
            instance.post("register",
                {
                    name: data.name,
                    email: data.email,
                    password: data.password
                }
            )
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
        setAlert(false);
    }
    return (
        <>
            {
                alert ?
                    <AntAlert
                        onClick={func}
                        type={"error"}
                        message={"Xato"}
                        description="parollar bir xil bo'lishi shart"
                        showIcon={true}
                        action={
                            <Button size="small" danger>
                                Tushunarli
                            </Button>
                        }
                        closable
                    /> : null
            }

            <DynamicForm change={change} disabled={disabled} onSubmit={onSubmit} fields={RegisterFields} />
        </>
    )
}