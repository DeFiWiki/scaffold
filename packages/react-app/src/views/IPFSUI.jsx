/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { Input, Button, Divider } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, Balance, Protocol } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";

const { TextArea } = Input;

const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' })

export default function IPFSUI({purpose, setPurposeEvents, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  const [ yourInput, setYourInput ] = useState()
  const [ adding, setAdding ] = useState( false )

  const [ hash, setHash ] = useState()
  const [ getting, setGetting ] = useState( false )
  const [ content, setContent ] = useState()

  return (
    <div>

      <div style={{padding:16, width:700, margin:"auto",marginTop:64}}>

        <Protocol />

      </div>

    </div>
  );
}
