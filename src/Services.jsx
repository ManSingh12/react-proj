import React from 'react';
import Card from './Card';
import App from '../src/img/app.png';
import Web from '../src/img/web.jpg';
import Marketing from '../src/img/marketing.jpg';
import Software from '../src/img/sd1.jpg';
import MachineL from '../src/img/ml.jpg';
import dmarketing from '../src/img/dm.png';
const Sdata=[
    {
        Imgsrc : Web,
        title:"Web Development"
    },
    {
        Imgsrc : App,
        title:"Android Development"
    },
    {
        Imgsrc : Marketing,
        title:"Marketing"
    },
    {
        Imgsrc : Software,
        title:"Software Development"
    },
    {
        Imgsrc : MachineL,
        title:"Machine Learning"
    },
    {
        Imgsrc : dmarketing,
        title:"Digital Marketing"
    }
    ]
const Services = () => {
    return (
        <>
            <div className="top-heading">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                        
                            {Sdata.map((val,ind) => {
                                return <Card key={ind} imgsrc={val.Imgsrc} title={val.title} />
                            })}
                        
                        </div>
                    </div>

                </div>
                <div className="bottom-space">

                </div>
            </div>
        </>
    );
}
export default Services;