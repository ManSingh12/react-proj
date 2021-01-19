import React from 'react';
import Common from  "./Common";
import web from "../src/img/img_1.png";

const About = () => {
    return (
        <>
            <Common name="Welcome to About page" btnName="Contact Us" imgsource={web} visit="/contact"/>
        </>
    );
}
export default About;