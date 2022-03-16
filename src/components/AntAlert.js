import React from "react";
import { Alert } from "antd";

const AntAlert = ({
    message,
    description,
    type,
    action,
    showIcon,
    closable,
    onClick
}) => {

    return (
        <div className="relative">
            <div className="fixed top-2 left-96 z-10 w-1/2">
                <Alert
                    onClick={onClick}
                    message={message}
                    showIcon={showIcon}
                    description={description}
                    type={type}
                    closable={closable}
                    action={action}
                // action={
                //     <Button size="small" danger>
                //         Detail
                //     </Button>
                // }
                />
            </div>
        </div>
    )
}
export default AntAlert;