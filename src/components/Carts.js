import React from 'react'
// import '../App.less';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Carts = ({
    img,
    userImg,
    title,
    desc,
    link
}) => {
    return (
        <div>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={img}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={userImg} />}
                    title={title}
                    description={desc}
                />
            </Card>
        </div>
    )
}

export default Carts