import React from 'react';


const AboutHeader = ({img}) => {
    return (
        <div className='mt-14 md:mt-0'>
            <img src={img} alt="" />
        </div>
    );
};

export default AboutHeader;