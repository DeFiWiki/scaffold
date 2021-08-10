import React, { useState } from "react";

import { Input, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });

const { TextArea } = Input; 

export default function Section({ header }) {

    const [canEdit, setCanEdit] = useState(false); 

    const [inProgress, setInProgress] = useState(false);

    const [content, setContent] = useState();
    const [hash, setHash] = useState();

    const toggleAction = async () => {
        setInProgress(true);
        if (canEdit) {
            uploadContent();
        } else {
            fetchContent();
        }
        setInProgress(false);
    };

    const uploadContent = async () => {
        let buffer = Buffer.from(content, 'utf-8');
        console.log("Buffer:", buffer);
        ipfs.files.add(buffer, function (err, file) {
            console.log("Added!");
            if (err) {
                console.log(err);
            }
            setHash(file[0].hash);
        });
        setCanEdit(false);
    }

    const fetchContent = async () => {
        if (hash) {
            ipfs.files.get(hash, function (err, file) {
                console.log("GOT!",err, file)
                setContent(file[0].content.toString())
            });
        }
        setCanEdit(true);
    }

    return (
        <div>
            {header}
            <Button loading={inProgress} onClick={toggleAction}>
                {canEdit ? "Upload" : "Edit"}
            </Button>
            <div>Hash: {hash}</div>
            <div>
                {
                    canEdit ? 
                        <TextArea value={content} onChange={(e)=>{
                            setContent(e.target.value);
                        }}/>
                        : 
                        <div style={{ height: "36px" }}> 
                            {content}
                        </div>
                }
            </div>
        </div>
    )
} 