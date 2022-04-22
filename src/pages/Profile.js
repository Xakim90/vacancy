import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "../components/ProgressBar";
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import CustomButton from '../components/CustomButton'

let url = "https://v2.convertapi.com/upload"

const Profile = () => {
    let formData = new FormData();

    const [uploadFile, setUploadFile] = useState({});
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onFileChange = (e) => {
        console.log(e.target.files[0])
        if (e.target && e.target.files[0]) {
            formData.append('file', e.target.files[0])
        }
    }

    const SubmitFileData = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(url, formData, {
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
                }
            })
            const { FileName, FileId } = res.data;
            console.log(res.data)
            setUploadFile({ FileName, FileId })
        } catch (err) {
            console.log(err)
        }
    }

    const props = {
        name: 'file',
        action: url,
        headers: {
            authorization: 'authorization-text',
        }
    };

    return (
        <>
            <div>
                <input type="file" name="upload_file" onChange={onFileChange} />
            </div>
            <ProgressBar percentage={uploadPercentage} />
            <div>
                <button onClick={SubmitFileData}>
                    Submit Data
                </button>
            </div>
            <div>
                <h4 className="text-center">{uploadFile.FileName}</h4>
                <br />
                {/* <img src={uploadFile.Url} alt="" /> */}
                {uploadFile.Url}
            </div>
            {/* <Upload showUploadList={false} {...props} onChange={onFileChange}>
                <CustomButton text={'Click to Upload'} icon={<UploadOutlined />}/>
            </Upload>
            <ProgressBar percentage={uploadPercentage} />
            <CustomButton text={'Upload Data'} onClick={SubmitFileData} /> */}
        </>
    )
}
export default Profile