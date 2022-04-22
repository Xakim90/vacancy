import React from 'react';
import user from '../fields/CardFields';
import { Card, Select } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link, Routes, Route } from 'react-router-dom';




const { Option } = Select;


const Home = () => {
    return (
        <div>
            <div>
                <div className="h-screen">
                    <div className='grid grid-cols-4'>
                        {
                            user.map((item, i) => (
                                <Link to={item.url}>
                                    <Card className='cursor-pointer hover:shadow-2xl drop-shadow-lg' key={item + i} style={{ width: 250, height: 150, marginTop: 16, borderRadius: 5 }}>
                                        <div className='text-center'>
                                            <div className='text-3xl h-1/4'>
                                                {item.icon}
                                            </div>
                                            <div className='h-3/4'>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))
                        }
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home