import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar/index";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <Hero />
            </div>
        </div>
    );
}

export default Home;