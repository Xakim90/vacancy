import React from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../components/CustomButton";

export default function Profile() {
    const dispatch = useDispatch();
    // const submit = () => {}
    return (
        <>
            <div>Profile</div>
            <CustomButton
                // onClick={() =>
                //     dispatch({
                //         type: 'AUTHORIZED_SUCCESS',
                //         payload: {
                //             name: "sadsd",
                //             email: "ajkshdhasd"
                //         }
                //     })
                // }
                text={"Button"} />
        </>
    )
}