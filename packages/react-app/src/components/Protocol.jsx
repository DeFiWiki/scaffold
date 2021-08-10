import React, { useState } from "react";

import { Image, Button } from 'antd';

import { Section } from ".";

export default function Protocol() {
    const sections = [];

    for (let i=0; i<5; ++i) {
        sections.push(`Section ${i}`);
    }

    return (
        <div>
            <h1>Alchemix</h1>
            <Image src="alchemix.png" />
            { sections.map( (val, i) => {
                return <Section header={val} />
            })}
        </div>
    )
}