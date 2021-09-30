import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchFlight from './SearchFlight';

import plane1 from '../assets/images/plane1.jpg';
import plane2 from '../assets/images/plane2.jpg';
import plane3 from '../assets/images/plane3.jpg';
import plane5 from '../assets/images/plane5.jpg';
import Corousal from './Corousal';

/** 
 * @author Vikrant
 * This component will render Home page for the app 
 * Sub Components : Corousal, SearchFlight, Header, Footer
*/

const features = [
    {
        image : plane1,
        feature : "Memorable Travel"
    },
    {
        image : plane2,
        feature : "COVID-19 Safety"
    },
    {
        image : plane3,
        feature : "Service at its best"
    },
    {
        image : plane5,
        feature : "Easy and Convinient Booking"
    }
];

function Home(props) {
    const featureCard = features.map(f => {
        return (
            <div className="mb-3 mr-auto ml-auto col-lg-3 col-sm-5">
                <div className="card">
                    <img className="card-img-top" src={f.image} alt="feature1" />
                    <div className="card-body" style={styling.card}>
                        <h5 className="card-title">{f.feature}</h5>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <Header />

            <main className="mb-4 mt-5">
                {/* <!-- Corousal section --> */}
                <section>
                    <Corousal />
                </section>

                <section style={styling.section_bg}>
                    <SearchFlight />
                </section>
                

                <section className="container-fluid  pt-3 pb-5 section-bg" style={styling.section_bg}>
                    <h2 style={styling.subheading}>Why BookMyFlight?</h2>
                    <div className="m-auto row">                       
                        {featureCard}
                    </div>
                </section>

            </main>

            <Footer />

        </div>
    );
}

let styling = {
    subheading : {
        textAlign: "center",
        color: "#333333",
        fontFamily: "Verdana",
        padding: 20
    },
    section_bg : {
        background : "linear-gradient(180deg, transparent, #6666ff)"
    },
    card : {
        background : "#00001a",
        color : "white"
    }
}

export default Home;