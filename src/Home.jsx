import React from 'react';
import web from "../src/img/img2.png";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow your business with" btnName="Get Started" imgsource={web} visit="/services" />
        </>
    );
}
export default Home;