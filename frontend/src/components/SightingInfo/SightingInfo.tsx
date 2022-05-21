import React from 'react';

interface SightingInfoProps {
    title: string;
    info: string | number | undefined;
}

const SightingInfo: React.FC<SightingInfoProps> = (props) => {
    const { title, info } = props;

    return (
        <fieldset>
            <legend>{title}</legend> 
            <div>{info}</div>
      </fieldset>
    )
}

export default SightingInfo;