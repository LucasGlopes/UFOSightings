import React from 'react';

interface SightingInfoProps {
    title: string;
    info: string | number | undefined;
}

const SightingInfo: React.FC<SightingInfoProps> = (props) => {
    const { title, info } = props;

    return (
        <fieldset
            style={{borderWidth:'3px', borderColor: 'black', borderRadius: 8 }}
        >
            <legend style={{ fontFamily: 'Orbitron' }}>{title}</legend> 
            <div style={{ fontFamily: 'Roboto', fontWeight: '450' }}>{info}</div>
      </fieldset>
    )
}

export default SightingInfo;